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
  facade = inject(ChittylogContainerFacade);
}
