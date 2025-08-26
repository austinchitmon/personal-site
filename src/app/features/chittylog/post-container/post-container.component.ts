import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostMarkdownComponent } from './post-markdown/post-markdown.component';

@Component({
  selector: 'app-post-container',
  imports: [
    PostMarkdownComponent
  ],
  template: `
    <div class="page-container">
      <app-post-markdown [articleRoute]="article()"/>
    </div>
  `,
  styleUrl: './post-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostContainerComponent {
  route = inject(ActivatedRoute);
  public article = signal<string>(this.route.snapshot.paramMap.get('postName') || '');
}
