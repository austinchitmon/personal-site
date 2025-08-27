import { NgOptimizedImage } from '@angular/common';
import {
  Component,
  signal,
  Signal
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Card } from 'primeng/card';
import { BLOG_MANIFEST } from '../../../shared/data/blog-manifest';

interface BlogConfig {
  fileName: Markdown;
  cover: Image;
  title: string;
  subtitle: string;
  date: string;
  tags: readonly string[];
}

type Markdown = `${string}.md`;
type Image = `${string}.png` | `${string}.jpg` | `${string}.jpeg` | `${string}.gif`;

interface Article extends BlogConfig {
  routerLink: string;
}

@Component({
  selector: 'app-chittylog-container',
  imports: [Card, NgOptimizedImage, RouterLink],
  template: `
    <div class="page-container">
      <h1>
        <span class="title white">Chitty</span
        ><span class="title gradient">blog</span>
      </h1>
      <h3 class="subtitle">
        Guides, updates, and random thoughts directly from me
      </h3>
      <div class="card-container">
        @for (article of articles(); track $index) {
          <p-card class="card"
                  [routerLink]="article.routerLink">
            <ng-template #header>
              <div class="box">
                <img
                  alt="{{article.title}}"
                  class="img-fill"
                  [ngSrc]="'blog/' + article.cover"
                  fill
                />
              </div>
            </ng-template>
            <ng-template #title>{{article.title || 'Article'}}</ng-template>
            <ng-template #subtitle>{{article.date}}</ng-template>
            <p class="multiline-ellipsis">{{article.subtitle}}</p>
          </p-card>
        }
      </div>
    </div>
  `,
  styleUrl: './chittylog-container.component.scss',
})
export class ChittylogContainerComponent {
  articles: Signal<Article[]> = signal(
    BLOG_MANIFEST.files.map((fileConfig) => this.formatFile(fileConfig))
  );

  private formatFile(file: BlogConfig): Article {
    return {
      ...file,
      date: new Date(file.date).toDateString(),
      routerLink: file.fileName.replace('.md', ''),
    };
  }
}
