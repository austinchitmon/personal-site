import { NgOptimizedImage } from '@angular/common';
import {
  Component,
  computed,
  signal,
  Signal
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Card } from 'primeng/card';
import { FloatLabel } from 'primeng/floatlabel';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputText } from 'primeng/inputtext';
import {
  debounceTime,
  distinctUntilChanged,
  map
} from 'rxjs';
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
type Image =
  | `${string}.png`
  | `${string}.jpg`
  | `${string}.jpeg`
  | `${string}.gif`;

interface Article extends BlogConfig {
  routerLink: string;
}

@Component({
  selector: 'app-chittylog-container',
  imports: [
    Card,
    NgOptimizedImage,
    RouterLink,
    FloatLabel,
    IconField,
    InputIcon,
    InputText,
    FormsModule,
    ReactiveFormsModule,
  ],
  template: `
    <div class="page-container">
      <h1>
        <span class="title white">Chitty</span
        ><span class="title gradient">blog</span>
      </h1>
      <h3 class="subtitle">
        Guides, updates, and random thoughts directly from me 🌌
      </h3>

      <div class="search-container">
        <p-floatlabel variant="in">
          <p-iconfield>
            <p-inputicon class="pi pi-search"/>
            <input
              pInputText
              id="search_articles"
              [formControl]="searchControl"
              class="search-input"
            />
          </p-iconfield>
          <label for="search_articles">Search articles...</label>
        </p-floatlabel>
      </div>

      <div class="card-container">
        @for (article of filteredArticles(); track $index) {
          <p-card class="card"
                  [routerLink]="article.routerLink">
            <ng-template #header>
              <div class="box">
                <img
                  alt="{{ article.title }}"
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
  searchControl = new FormControl('');
  articles: Signal<Article[]> = signal(
    BLOG_MANIFEST.files.map((fileConfig) => this.formatFile(fileConfig))
  );
  searchValue = toSignal(
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map(value => value?.toLowerCase()?.trim())
    )
  );

  filteredArticles: Signal<Article[]> = computed(() => {
    const searchValue = this.searchValue();
    if (!searchValue) {
      return this.articles();
    }

    return this.articles().filter(
      (article) =>
        article.title.toLowerCase().includes(searchValue) ||
        article.subtitle.toLowerCase().includes(searchValue) ||
        article.tags.some((tag) => tag.toLowerCase().includes(searchValue))
    );
  });

  private formatFile(file: BlogConfig): Article {
    return {
      ...file,
      date: new Date(file.date).toDateString(),
      routerLink: file.fileName.replace('.md', ''),
    };
  }
}
