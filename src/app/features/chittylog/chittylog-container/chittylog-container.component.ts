import {
  Component,
  inject,
  Signal
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { ApiService } from '../../../shared/api/api.service';
import { SectionBreakComponent } from '../../../shared/section-break/section-break.component';

type Markdown = `${string}.md`;

export interface Manifest {
  files: Markdown[];
}

interface Article {
  title: string;
  routerLink: string;
}

@Component({
  selector: 'app-chittylog-container',
  imports: [
    SectionBreakComponent,
    RouterLink
  ],
  template: `
    <div class="page-container">
      <h1>ChittyBlog</h1>
      <p>Running list of all my thoughts and ramblings.</p>
      <app-section-break/>
      <ul>
        @for (article of articles(); track $index) {
          <li><a [routerLink]="article.routerLink">{{article.title}} </a></li>
        }
      </ul>
    </div>
  `,
  styleUrl: './chittylog-container.component.scss'
})
export class ChittylogContainerComponent {
  api = inject(ApiService);
  articles: Signal<Article[]> = toSignal(
    this.api.get<Manifest>('blog/manifest.json').pipe(
      map((manifest: Manifest) => {
        return manifest.files.map(fileName => this.formatFile(fileName));
      })
    ),
    { initialValue: [] }
  );

  private formatFile(fileName: Markdown): Article {
    console.log(fileName);
    const fileWithoutExtension = fileName.replace('.md', '');
    return {
      title: fileWithoutExtension
        .split('-')
        .map(word => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(' '),
      routerLink: fileWithoutExtension
    };

  }
}
