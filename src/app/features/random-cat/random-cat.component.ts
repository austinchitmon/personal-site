import { NgOptimizedImage } from '@angular/common';
import {
  Component,
  input
} from '@angular/core';
import { CatStore } from './cat.store';
import { CatInteractionsService } from './services/cat.interactions.service';

@Component({
  selector: 'app-random-cat',
  imports: [
    NgOptimizedImage
  ],
  providers: [
    CatStore,
    CatInteractionsService
  ],
  template: `
    <div class="display-flex flex-col row-gap flex-center vertical-padding">
      <div>
        <button
          class="button-primary"
          (click)="catInteractions.updateRandomCatUrl()">Generate Cat 🐈‍⬛
        </button>
      </div>
      @if (catInteractions.$randomCatUrl()) {
        <div class="flex-center flex-col display-flex row-gap"
             [style.visibility]="catInteractions.$imageLoading() ? 'hidden' : 'visible'">
          <div [style.width]="'20rem'"
               [style.height]="'20rem'"
               [style.position]="'relative'">
            <img
              [style.border-width]="'.5rem'"
              [style.border-style]="'dotted'"
              [style.border-color]="textColor()"
              (load)="catInteractions.imageLoaded()"
              fill
              alt="Some fuzzy guy"
              [ngSrc]='catInteractions.$randomCatUrl()'
            />
          </div>
          <p class="cat-description">{{catInteractions.$uwuDescription()}}</p>
        </div>
      }
    </div>

  `,
  styleUrl: './random-cat.component.scss'
})
export class RandomCatComponent {
  textColor = input.required<string>();

  constructor(public readonly catInteractions: CatInteractionsService
  ) {
  }


}
