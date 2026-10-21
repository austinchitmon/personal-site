import { DOCUMENT } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, computed, effect, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EMPTY, Subject, TimeoutError, catchError, exhaustMap, filter, finalize, fromEvent, merge, of, tap, timer } from 'rxjs';
import { AuthFacade } from '../../../shared/auth/auth.facade';
import { HomelabApiService } from './homelab-api.service';
import { HomelabContainer } from './homelab.models';
import { HomelabStore } from './homelab.store';

@Injectable()
export class HomelabFacade {
  private readonly store = inject(HomelabStore);
  private readonly api = inject(HomelabApiService);
  private readonly auth = inject(AuthFacade);
  private readonly document = inject(DOCUMENT);
  private readonly refreshRequests = new Subject<void>();

  readonly data = this.store.data;
  readonly loading = this.store.loading;
  readonly error = this.store.error;
  readonly accessDenied = this.store.accessDenied;
  readonly autoRefresh = this.store.autoRefresh;
  readonly lastSuccess = this.store.lastSuccess;
  readonly latency = this.store.latency;
  readonly history = this.store.history;
  readonly authorized = this.auth.isAdmin;
  readonly apiUrl = this.api.url;
  readonly snapshot = computed(() => this.data()?.snapshot ?? null);
  readonly collectorAge = computed(() => {
    const age = this.data()?.collector.ageSeconds;
    const lastSuccess = this.lastSuccess();
    return age == null || lastSuccess == null ? null
      : age + Math.max(0, Math.floor((this.store.now() - lastSuccess) / 1000));
  });
  readonly connectionCurrent = computed(() => !!this.data() && !this.error()
    && this.lastSuccess() !== null && this.store.now() - this.lastSuccess()! <= 45_000);
  readonly isStale = computed(() => !!this.error() || this.data()?.collector.state !== 'fresh'
    || (this.collectorAge() ?? 61) > 60);
  readonly connectionLabel = computed(() => !this.error()
    ? this.data() ? this.connectionCurrent() ? 'Connected' : 'Not checked recently' : 'Connecting…'
    : this.store.errorStatus() === 200 ? 'Unexpected response'
      : this.store.errorStatus() === 404 ? 'Endpoint missing'
      : this.store.errorStatus() ? `HTTP ${this.store.errorStatus()}`
        : this.store.timedOut() ? 'Timed out' : 'Unreachable');
  readonly collectorLabel = computed(() => this.error() ? 'No current update'
    : !this.data() ? 'Waiting…' : this.data()!.collector.state === 'unavailable' ? 'Unavailable'
      : this.isStale() ? 'Stale data' : 'Reporting');
  readonly collectorDetail = computed(() => this.error()
    ? 'Waiting for another API response. Host observations below are not current.'
    : !this.data() ? 'Waiting for the first host snapshot.'
      : this.data()!.collector.state === 'fresh' && (this.collectorAge() ?? 61) > 60
        ? 'Host observations have aged. Refresh monitoring or check the collector.'
        : this.data()!.collector.detail);
  readonly containers = computed(() => this.snapshot()?.docker.containers ?? []);
  readonly inventoryAvailable = computed(() => this.snapshot()?.docker.available === true);
  readonly running = computed(() => this.inventoryAvailable()
    ? this.containers().filter(container => container.state === 'running').length : null);
  readonly attention = computed(() => this.inventoryAvailable()
    ? this.containers().filter(container => container.state !== 'running'
      || !!container.health && container.health !== 'healthy').length : null);
  readonly cpuTrend = computed(() => this.trend('cpu'));
  readonly memoryTrend = computed(() => this.trend('memory'));
  readonly memoryPercent = computed(() => {
    const host = this.snapshot()?.host;
    return host ? this.percentage(host.memoryTotalBytes - host.memoryAvailableBytes, host.memoryTotalBytes) : null;
  });
  readonly diskPercent = computed(() => {
    const host = this.snapshot()?.host;
    return host ? this.percentage(host.diskUsedBytes, host.diskTotalBytes) : null;
  });

  constructor() {
    timer(0, 1000).pipe(takeUntilDestroyed()).subscribe(() => this.store.tick());
    effect(onCleanup => {
      if (!this.auth.isAdmin()) {
        this.store.clear();
        return;
      }
      if (this.accessDenied()) return;
      const subscription = merge(of(undefined), this.refreshRequests,
        this.autoRefresh() ? merge(timer(15_000, 15_000), fromEvent(this.document, 'visibilitychange'))
          .pipe(filter(() => !this.document.hidden)) : EMPTY).pipe(
        exhaustMap(() => {
          this.store.begin();
          const start = performance.now();
          let receivedResponse = false;
          return this.api.status().pipe(
            tap(data => {
              receivedResponse = true;
              if (!data?.api || !data.collector || !data.database || data.snapshot && (
                  !data.snapshot.host || !data.snapshot.docker || !Array.isArray(data.snapshot.docker.containers)
                  || !Array.isArray(data.snapshot.services) || !Array.isArray(data.snapshot.warnings))) {
                throw new Error('Unexpected monitoring response');
              }
              this.store.received(data, Math.round(performance.now() - start));
            }),
            catchError((error: unknown) => {
              const status = error instanceof HttpErrorResponse ? error.status : receivedResponse ? 200 : null;
              const denied = status === 401 || status === 403;
              this.store.failed(denied
                ? 'Admin access is required. Sign in again to continue.'
                : error instanceof TimeoutError ? 'The monitoring request timed out. Check the API or tunnel.'
                : status === 200 ? 'The API returned unexpected monitoring data. Check backend/frontend versions.'
                : status === 404
                  ? 'Monitoring endpoint not found. Deploy the homelab backend update first.'
                  : 'The API did not return a monitoring update. Check the server, tunnel, or network connection.',
              denied, status, error instanceof TimeoutError);
              console.error('Homelab monitoring request failed', { endpoint: this.api.url, status });
              return EMPTY;
            }),
            finalize(() => this.store.finish()),
          );
        }),
      ).subscribe();
      onCleanup(() => subscription.unsubscribe());
    });
  }

  refresh(): void {
    if (this.accessDenied()) this.store.retry();
    else this.refreshRequests.next();
  }
  toggleAutoRefresh(): void { this.store.toggleAutoRefresh(); }
  login(): void { this.auth.login(); }

  containerName(container: HomelabContainer): string {
    if (container.service === 'postgres') return 'PostgreSQL';
    if (container.service === 'personal-site-service') return 'Chitmon API';
    return container.service || container.name;
  }
  containerStatus(container: HomelabContainer): string {
    if (this.isStale()) return 'Last observed: ' + (container.health || container.state);
    return container.health || container.state;
  }
  containerHealthy(container: HomelabContainer): boolean {
    return !this.isStale() && container.state === 'running' && (!container.health || container.health === 'healthy');
  }
  portLabel(port: HomelabContainer['ports'][number]): string {
    const destination = `${port.containerPort}/${port.protocol}`;
    if (!port.hostPort) return `Internal: ${destination}`;
    const host = port.hostIp || '*';
    return `${host.includes(':') ? '[' + host + ']' : host}:${port.hostPort} → ${destination}`;
  }
  bytes(value: number | null | undefined): string {
    if (value == null || !Number.isFinite(value)) return '—';
    if (value === 0) return '0 B';
    const index = Math.min(4, Math.max(0, Math.floor(Math.log(Math.max(1, value)) / Math.log(1024))));
    return `${(value / 1024 ** index).toFixed(index ? 1 : 0)} ${['B', 'KiB', 'MiB', 'GiB', 'TiB'][index]}`;
  }
  duration(seconds: number | null | undefined): string {
    if (seconds == null || seconds < 0 || !Number.isFinite(seconds)) return '—';
    if (seconds >= 86400) return `${Math.floor(seconds / 86400)}d ${Math.floor(seconds % 86400 / 3600)}h`;
    if (seconds >= 3600) return `${Math.floor(seconds / 3600)}h ${Math.floor(seconds % 3600 / 60)}m`;
    return `${Math.floor(seconds / 60)}m`;
  }
  uptime(startedAt: string | null): string {
    return startedAt ? this.duration((Date.now() - Date.parse(startedAt)) / 1000) : '—';
  }
  percentage(used: number, total: number): number | null {
    return total > 0 ? Math.max(0, Math.min(100, 100 * used / total)) : null;
  }

  private trend(field: 'cpu' | 'memory'): string {
    const samples = this.history();
    // Resume after the last missing sample without drawing a line across an unknown interval.
    const history = samples.slice(samples.findLastIndex(sample => sample[field] == null) + 1);
    if (history.length < 2) return '';
    return history.map((sample, index) =>
      `${index / (history.length - 1) * 300},${60 - Math.min(100, Math.max(0, sample[field]!)) * 0.56}`).join(' ');
  }
}
