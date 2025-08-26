import { NgOptimizedImage } from '@angular/common';
import {
  Component,
  inject,
  Signal
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { Card } from 'primeng/card';
import { map } from 'rxjs';
import { ApiService } from '../../../shared/api/api.service';

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
    Card,
    NgOptimizedImage,
    RouterLink
  ],
  template: `
    <div class="page-container">
      <h1><span class="title white">Chitty</span><span class="title gradient">blog</span></h1>
      <h3 class="subtitle">Guides, updates, and random thoughts directly from me</h3>
      <div class="card-container">
        @for (article of articles(); track $index) {
          <p-card class="card"
                  [routerLink]="article.routerLink">
            <ng-template #header>
              <div class="box">
                <img alt="Card"
                     class="img-fill"
                     ngSrc="https://primefaces.org/cdn/primeng/images/card-ng.jpg"
                     fill/>
              </div>
            </ng-template>
            <ng-template #title>{{article.title || 'Blank'}}</ng-template>
            <ng-template #subtitle>10/07/2025</ng-template>
            <p class="multiline-ellipsis">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
            </p>
          </p-card>
        }
      </div>
    </div>
  `,
  styleUrl: './chittylog-container.component.scss'
})
export class ChittylogContainerComponent {
  api = inject(ApiService);
  articles: Signal<Article[]> = toSignal(
    this.api.get<Manifest>('blog/manifest.json').pipe(
      map((manifest: Manifest): Article[] => {
        return [
          ...manifest.files.map(fileName => this.formatFile(fileName)),
        ];
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
