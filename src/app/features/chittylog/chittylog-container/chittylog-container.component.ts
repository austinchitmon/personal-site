import { NgOptimizedImage } from '@angular/common';
import {
  Component,
  inject,
  Signal
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { Card } from 'primeng/card';
import {
  map,
  tap
} from 'rxjs';
import { ApiService } from '../../../shared/api/api.service';


interface BlogConfig {
  fileName: Markdown;
  title: string;
  subtitle: string;
  date: string;
  tags: string[];
}

type Markdown = `${string}.md`;

export interface Manifest {
  files: BlogConfig[];
}

interface Article extends BlogConfig {
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
            <ng-template #subtitle>{{article.date}}</ng-template>
            <p class="multiline-ellipsis">{{article.subtitle}}</p>
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
          ...manifest.files.map(fileConfig => this.formatFile(fileConfig)),
        ];
      }),
      tap(files => console.log(files))
    ),
    { initialValue: [] }
  );

  private formatFile(file: BlogConfig): Article {
    return {
      ...file,
      date: new Date(file.date).toDateString(),
      routerLink: file.fileName.replace('.md', '')
    };

  }
}
