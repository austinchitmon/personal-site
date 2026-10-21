import { Injectable, computed, signal } from '@angular/core';
import { HomelabSample, HomelabStatus } from './homelab.models';

@Injectable()
export class HomelabStore {
  private readonly clock = signal(Date.now());
  readonly now = this.clock.asReadonly();
  private readonly state = signal<{
    data: HomelabStatus | null;
    loading: boolean;
    error: string | null;
    errorStatus: number | null;
    timedOut: boolean;
    accessDenied: boolean;
    autoRefresh: boolean;
    lastSuccess: number | null;
    latency: number | null;
    history: HomelabSample[];
  }>({ data: null, loading: false, error: null, errorStatus: null, timedOut: false, accessDenied: false, autoRefresh: true,
    lastSuccess: null, latency: null, history: [] });

  readonly data = computed(() => this.state().data);
  readonly loading = computed(() => this.state().loading);
  readonly error = computed(() => this.state().error);
  readonly errorStatus = computed(() => this.state().errorStatus);
  readonly timedOut = computed(() => this.state().timedOut);
  readonly accessDenied = computed(() => this.state().accessDenied);
  readonly autoRefresh = computed(() => this.state().autoRefresh);
  readonly lastSuccess = computed(() => this.state().lastSuccess);
  readonly latency = computed(() => this.state().latency);
  readonly history = computed(() => this.state().history);

  begin(): void { this.state.update(state => ({ ...state, loading: true })); }
  tick(): void { this.clock.set(Date.now()); }
  finish(): void { this.state.update(state => ({ ...state, loading: false })); }
  toggleAutoRefresh(): void { this.state.update(state => ({ ...state, autoRefresh: !state.autoRefresh })); }
  retry(): void { this.state.update(state => ({ ...state, accessDenied: false })); }

  received(data: HomelabStatus, latency: number): void {
    this.state.update(state => {
      let history = state.history;
      if (data.snapshot && data.collector.state === 'fresh'
          && history.at(-1)?.at !== data.snapshot.collectedAt) {
        const host = data.snapshot.host;
        history = [...history, { at: data.snapshot.collectedAt, cpu: host.cpuPercent,
          memory: host.memoryTotalBytes > 0
            ? 100 * (host.memoryTotalBytes - host.memoryAvailableBytes) / host.memoryTotalBytes : null }].slice(-20);
      }
      return { ...state, data, history, error: null, errorStatus: null, timedOut: false,
        accessDenied: false, latency, lastSuccess: Date.now() };
    });
  }

  failed(error: string, accessDenied: boolean, errorStatus: number | null, timedOut: boolean): void {
    this.state.update(state => ({ ...state, error, accessDenied, errorStatus, timedOut,
      data: accessDenied ? null : state.data, history: accessDenied ? [] : state.history }));
  }

  clear(): void {
    this.state.update(state => ({ ...state, data: null, history: [], error: null, errorStatus: null, timedOut: false,
      lastSuccess: null, latency: null, loading: false, accessDenied: false }));
  }
}
