import { Injectable, computed, signal } from '@angular/core';

@Injectable()
export class HomeStore {
  private readonly state = signal<{ downloading: boolean; error: string | null }>({
    downloading: false,
    error: null,
  });

  readonly downloading = computed(() => this.state().downloading);
  readonly error = computed(() => this.state().error);

  startDownload(): void {
    this.state.set({ downloading: true, error: null });
  }

  downloadFailed(): void {
    this.state.update(state => ({ ...state, error: "The resume couldn't be downloaded. Please try again." }));
  }

  finishDownload(): void {
    this.state.update(state => ({ ...state, downloading: false }));
  }
}
