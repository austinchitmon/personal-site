import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { catchError, map, switchMap, throwError } from 'rxjs';
import { ApiService } from '../../../shared/api/api.service';
import { PostMarkdownComponent } from './post-markdown/post-markdown.component';

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
      </div>

      <div class="content-area">
        <app-post-markdown [articleContent]="article() || ''" />
      </div>
    </div>
  `,
  styleUrl: './post-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostContainerComponent {
  route = inject(ActivatedRoute);
  api = inject(ApiService);
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
}
