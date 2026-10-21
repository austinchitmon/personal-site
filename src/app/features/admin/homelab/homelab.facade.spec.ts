import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Session } from '@supabase/supabase-js';
import { environment } from '../../../../environments/environment';
import { AuthFacade } from '../../../shared/auth/auth.facade';
import { authInterceptor } from '../../../shared/auth/auth.interceptor';
import { supabase } from '../../../shared/auth/supabase-client';
import { HomelabFacade } from './homelab.facade';
import { HomelabStatus } from './homelab.models';
import { HomelabStore } from './homelab.store';

function monitoringFixture(): HomelabStatus {
  const now = new Date().toISOString();
  return {
    checkedAt: now, api: { state: 'up', uptimeSeconds: 3600 },
    database: { state: 'up', detail: 'Connection validated', latencyMs: 2 },
    collector: { state: 'fresh', collectedAt: now, ageSeconds: 0, detail: 'Reporting' },
    snapshot: { schemaVersion: 1, collectedAt: now,
      host: { hostname: 'homelab', operatingSystem: 'Ubuntu', kernel: '7', uptimeSeconds: 1000,
        cpuCores: 4, cpuPercent: 1.5, loadAverage: [0.1, 0.2, 0.3], memoryTotalBytes: 16000,
        memoryAvailableBytes: 14000, swapTotalBytes: 4000, swapFreeBytes: 4000,
        diskTotalBytes: 100000, diskUsedBytes: 12000, diskFreeBytes: 88000 },
      docker: { available: true, statsAvailable: true, version: '29', containers: [
        { id: 'postgres-123', name: 'postgres-1', image: 'postgres:17-alpine', imageId: 'sha256:fixture', project: 'site', service: 'postgres',
          state: 'running', health: 'healthy', startedAt: now, finishedAt: null, exitCode: 0,
          restartCount: 0, cpuPercent: 0.2, memoryUsedBytes: 3000, memoryLimitBytes: 16000,
          networkReceivedBytes: 100, networkSentBytes: 200,
          ports: [{ containerPort: 5432, protocol: 'tcp', hostIp: '127.0.0.1', hostPort: 5432 }] },
      ] }, services: [{ name: 'cloudflared.service', label: 'Cloudflare Tunnel', state: 'active' }], warnings: [] },
  };
}

describe('Homelab dashboard requests and state', () => {
  const url = `${environment.apiBase}/admin/homelab`;
  const admin = signal(true);
  let requests: HttpTestingController;
  let facade: HomelabFacade;

  beforeEach(() => {
    vi.useFakeTimers();
    admin.set(true);
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
    vi.spyOn(document, 'hidden', 'get').mockReturnValue(false);
    vi.spyOn(supabase.auth, 'getSession').mockResolvedValue({
      data: { session: { access_token: 'test-admin-token' } as Session }, error: null,
    });
    TestBed.configureTestingModule({ providers: [
      HomelabFacade, HomelabStore,
      provideHttpClient(withInterceptors([authInterceptor])), provideHttpClientTesting(),
      { provide: AuthFacade, useValue: { isAdmin: admin, login: vi.fn() } },
    ] });
    requests = TestBed.inject(HttpTestingController);
  });

  async function start() {
    facade = TestBed.inject(HomelabFacade);
    TestBed.tick();
    await Promise.resolve();
  }

  afterEach(() => {
    requests.verify();
    TestBed.resetTestingModule();
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it('sends a bearer token, prevents overlapping refreshes, and shows real inventory', async () => {
    await start();
    facade.refresh();
    facade.refresh();
    const request = requests.expectOne(url);
    expect(request.request.headers.get('Authorization')).toBe('Bearer test-admin-token');
    request.flush(monitoringFixture());
    expect(facade.connectionLabel()).toBe('Connected');
    expect(facade.running()).toBe(1);
    expect(facade.containers()[0].service).toBe('postgres');
    expect(facade.loading()).toBe(false);
  });

  it('keeps last-known values clearly stale when the network fails', async () => {
    await start();
    requests.expectOne(url).flush(monitoringFixture());
    facade.refresh();
    await Promise.resolve();
    requests.expectOne(url).error(new ProgressEvent('error'));
    expect(facade.data()).not.toBeNull();
    expect(facade.isStale()).toBe(true);
    expect(facade.connectionLabel()).toBe('Unreachable');
    expect(facade.containerStatus(facade.containers()[0])).toContain('Last observed');
    expect(facade.containerHealthy(facade.containers()[0])).toBe(false);
    expect(facade.history()).toHaveLength(1);
  });

  it('clears private data and stops polling after the server denies access', async () => {
    await start();
    requests.expectOne(url).flush(monitoringFixture());
    facade.refresh();
    await Promise.resolve();
    requests.expectOne(url).flush({}, { status: 403, statusText: 'Forbidden' });
    TestBed.tick();
    await vi.advanceTimersByTimeAsync(45000);
    expect(facade.accessDenied()).toBe(true);
    expect(facade.data()).toBeNull();
    expect(facade.history()).toEqual([]);
    requests.expectNone(url);
  });

  it('cancels an in-flight request and clears data when the admin signs out', async () => {
    await start();
    const request = requests.expectOne(url);
    admin.set(false);
    TestBed.tick();
    expect(request.cancelled).toBe(true);
    expect(facade.data()).toBeNull();
    await vi.advanceTimersByTimeAsync(30000);
    requests.expectNone(url);
  });

  it('never requests metrics for a signed-out or non-admin session', async () => {
    admin.set(false);
    await start();
    await vi.advanceTimersByTimeAsync(30000);
    requests.expectNone(url);
    expect(supabase.auth.getSession).not.toHaveBeenCalled();
  });

  it('ages paused observations instead of showing old green status indefinitely', async () => {
    await start();
    requests.expectOne(url).flush(monitoringFixture());
    facade.toggleAutoRefresh();
    TestBed.tick();
    await Promise.resolve();
    requests.expectOne(url).flush(monitoringFixture());
    await vi.advanceTimersByTimeAsync(65000);
    expect(facade.collectorAge()).toBeGreaterThanOrEqual(65);
    expect(facade.isStale()).toBe(true);
    expect(facade.collectorLabel()).toBe('Stale data');
    expect(facade.connectionCurrent()).toBe(false);
    requests.expectNone(url);
  });

  it('times out stalled requests and restores manual refresh', async () => {
    await start();
    const request = requests.expectOne(url);
    await vi.advanceTimersByTimeAsync(8000);
    expect(request.cancelled).toBe(true);
    expect(facade.connectionLabel()).toBe('Timed out');
    expect(facade.loading()).toBe(false);
  });

  it('distinguishes an undeployed endpoint from a network failure', async () => {
    await start();
    requests.expectOne(url).flush({}, { status: 404, statusText: 'Not Found' });
    expect(facade.connectionLabel()).toBe('Endpoint missing');
    expect(facade.error()).toContain('Deploy');
  });

  it('does not turn an unavailable Docker daemon into an empty healthy inventory', async () => {
    await start();
    const response = monitoringFixture();
    response.snapshot!.docker = { available: false, statsAvailable: false, version: null, containers: [] };
    requests.expectOne(url).flush(response);
    expect(facade.inventoryAvailable()).toBe(false);
    expect(facade.running()).toBeNull();
    expect(facade.attention()).toBeNull();
  });

  it('distinguishes a malformed successful response from an unreachable API', async () => {
    await start();
    requests.expectOne(url).flush({ api: { state: 'up' } });
    expect(facade.connectionLabel()).toBe('Unexpected response');
    expect(facade.data()).toBeNull();
    expect(facade.error()).toContain('unexpected monitoring data');
  });

  it('adds distinct host samples only and does not interpret missing values as zero', async () => {
    await start();
    const response = monitoringFixture();
    response.snapshot!.host.cpuPercent = null;
    requests.expectOne(url).flush(response);
    facade.refresh();
    await Promise.resolve();
    requests.expectOne(url).flush(response);
    expect(facade.history()).toHaveLength(1);
    expect(facade.history()[0].cpu).toBeNull();
    expect(facade.cpuTrend()).toBe('');
    await vi.advanceTimersByTimeAsync(15000);
    requests.expectOne(url).flush(monitoringFixture());
    expect(facade.history()).toHaveLength(2);
    expect(facade.memoryTrend()).not.toBe('');
    expect(facade.cpuTrend()).toBe('');
    await vi.advanceTimersByTimeAsync(15000);
    requests.expectOne(url).flush(monitoringFixture());
    expect(facade.cpuTrend()).not.toBe('');
  });
});
