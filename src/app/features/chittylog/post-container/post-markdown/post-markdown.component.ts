import {
  ChangeDetectionStrategy,
  Component,
  input
} from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-post-markdown',
  imports: [
    MarkdownComponent
  ],
  template: `
    <markdown
      emoji
      class="markdown"
      [src]="articleRoute()">
    </markdown>
  `,
  styleUrl: './post-markdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostMarkdownComponent {
  articleRoute = input.required<string, string>({
    transform: (value: string) => {
      return `blog/${value}.md`;
    }
  });
}
