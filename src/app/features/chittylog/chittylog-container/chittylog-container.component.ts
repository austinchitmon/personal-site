import { NgOptimizedImage } from '@angular/common';
import {
  Component,
  inject
} from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Card } from 'primeng/card';
import { FloatLabel } from 'primeng/floatlabel';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputText } from 'primeng/inputtext';
import { JoinPipe } from '../../../shared/pipes/join.pipe';
import { ArticleTagComponent } from './article-tag/article-tag.component';
import { ChittylogContainerFacade } from './chittylog-container.facade';
import { ChittylogContainerStore } from './chittylog-container.store';

@Component({
  selector: 'app-chittylog-container',
  providers: [
    ChittylogContainerStore,
    ChittylogContainerFacade
  ],
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
    ArticleTagComponent,
    JoinPipe,
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
              [formControl]="facade.control()"
              class="search-input"
            />
          </p-iconfield>
          <label for="search_articles">Search articles...</label>
        </p-floatlabel>
      </div>

      <div class="tag-search-container">
        <div><p>Search by tag:</p></div>
        <div class="tag-container">
          @for (tag of facade.allTags(); track $index) {
            <app-article-tag
              [value]="tag"
              (tagClick)="facade.toggleTagSelection($event)"
              class="clickable"
            />
          }
        </div>
      </div>

      @if (facade.filterList().length) {
        <div>
          <span class="text-sm">Filter by: {{facade.filterList() | join}}</span>
        </div>
      }
      <div class="card-container">
        @for (article of facade.filteredArticles(); track $index) {
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
            <ng-template #subtitle>
              <div class="display-flex flex-col row-gap-2">
                <div class="display-flex flex-row col-gap-2">
                  @for (tag of article.tags; track $index) {
                    <app-article-tag
                      (tagClick)="facade.toggleTagSelection($event)"
                      class="clickable"
                      [value]="tag"
                    />
                  }
                </div>
                <div>{{article.date}}</div>
              </div>
            </ng-template>
            <p class="multiline-ellipsis">{{article.subtitle}}</p>
          </p-card>
        }
      </div>
    </div>
  `,
  styleUrl: './chittylog-container.component.scss',
})
export class ChittylogContainerComponent {
  facade = inject(ChittylogContainerFacade);
}
