import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  Signal,
  signal,
} from '@angular/core';
import {
  toObservable,
  toSignal
} from '@angular/core/rxjs-interop';
import {
  ActivatedRoute,
  RouterLink
} from '@angular/router';
import { ButtonModule } from 'primeng/button';
import {
  catchError,
  combineLatest,
  map,
  switchMap,
  throwError
} from 'rxjs';
import { ApiService } from '../../../shared/api/api.service';
import { lazyService } from '../../../shared/functions/lazy-service';
import { PostMarkdownComponent } from './post-markdown/post-markdown.component';

const ReadingTimeService = () => import('../../../shared/services/reading-time.service').then((m) => m.ReadingTimeService);

@Component({
  selector: 'app-post-container',
  imports: [PostMarkdownComponent, ButtonModule, RouterLink],
  template: `
    <div class="page-container">
      <div class="navigation-header">
        <p-button
          label="Back to Blog"
          icon="pi pi-chevron-left"
          [routerLink]="['../']"
          severity="secondary"
          [text]="true"
        >
        </p-button>

        <div class="action-buttons">
          <p-button
            [label]="shareButtonLabel()"
            icon="pi pi-share-alt"
            (click)="handleShareClick()"
            severity="secondary"
            [text]="true"
          >
          </p-button>

          <p-button
            label="Download"
            icon="pi pi-download"
            (click)="downloadMarkdown()"
            severity="secondary"
            [text]="true"
          >
          </p-button>
        </div>
      </div>
      <div class="reading-time-container">
        <i class="pi pi-clock reading-time-icon"></i>
        <p class="text-sm">{{timeToReadInMinutes()}} min. read</p>
      </div>

      <div class="content-area">
        <app-post-markdown
          [articleContent]="article() || ''"
        />
      </div>
    </div>
  `,
  styleUrl: './post-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostContainerComponent {
  route = inject(ActivatedRoute);
  api = inject(ApiService);
  timeEstimate = lazyService(ReadingTimeService);

  // Signal for share button state
  shareButtonCopied = signal(false);

  // Computed signal for dynamic button label
  shareButtonLabel = computed(() =>
    this.shareButtonCopied() ? 'Copied!' : 'Share'
  );
  public article: Signal<string | undefined> = toSignal(
    this.route.paramMap.pipe(
      map((params): string => params.get('postName') || ''),
      switchMap((name) =>
        name
          ? this.api.get<string>(`blog/${name}.md`, { responseType: 'text' })
          : throwError(() => 'No route param')
      ),
      catchError((err) => {
        console.error(err);
        return '';
      })
    )
  );
  public timeToReadInMinutes = toSignal(
    combineLatest([
      toObservable(this.article),
      this.timeEstimate
    ]).pipe(
      switchMap(([article, timeEstimate]) => {
        return timeEstimate.getReadingTimeInMinutes(article || '');
      })
    )
  );

  downloadMarkdown() {
    if (this.article()) {
      const article = this.article() as string;
      const blob = new Blob([article], { type: 'text/markdown' });

      // Create a temporary link element
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'my-file.md'; // Name of the file to download
      a.click();

      // Optional: release the URL after download
      URL.revokeObjectURL(a.href);
    }
  }

  copyCurrentUrl() {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        // handle
      })
      .catch(err => {
        console.error('Failed to copy URL: ', err);
      });
  }

  handleShareClick() {
    this.copyCurrentUrl();
    this.shareButtonCopied.set(true);

    setTimeout(() => {
      this.shareButtonCopied.set(false);
    }, 2000); // Reset after 2 seconds
  }
}
