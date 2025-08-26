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
      [data]="articleContent()">
    </markdown>
  `,
  styleUrl: './post-markdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostMarkdownComponent {
  articleContent = input.required<string, string>({
    transform: (value: string) => {
      return this.stripFrontMatter(value);
    }
  });

  private stripFrontMatter(markdown: string): string {
    const frontMatterRegex = /^---\s*[\s\S]*?\s*---/;
    return markdown.replace(frontMatterRegex, '').trim();
  }
}
