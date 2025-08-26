import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Signal
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import {
  catchError,
  map,
  switchMap,
  throwError
} from 'rxjs';
import { ApiService } from '../../../shared/api/api.service';
import { PostMarkdownComponent } from './post-markdown/post-markdown.component';

@Component({
  selector: 'app-post-container',
  imports: [
    PostMarkdownComponent
  ],
  template: `
    <div class="page-container">
      <app-post-markdown [articleContent]="article() || ''"/>
    </div>
  `,
  styleUrl: './post-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostContainerComponent {
  route = inject(ActivatedRoute);
  api = inject(ApiService);
  public article: Signal<string | undefined> = toSignal(
    this.route.paramMap.pipe(
      map((params): string => params.get('postName') || ''),
      switchMap(name => name ?
        this.api.get<string>(`blog/${name}.md`, { responseType: 'text' })
        : throwError(() => 'No route param')),
      catchError((err) => {
        console.error(err);
        return '';
      })
    )
  );
}
