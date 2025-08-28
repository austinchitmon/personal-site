import { NgOptimizedImage } from '@angular/common';
import {
  Component,
  input
} from '@angular/core';
import { ButtonDirective } from 'primeng/button';
import { CatStore } from './cat.store';
import { CatInteractionsService } from './services/cat.interactions.service';

@Component({
  selector: 'app-random-cat',
  imports: [
    NgOptimizedImage,
    ButtonDirective
  ],
  providers: [
    CatStore,
    CatInteractionsService
  ],
  template: `
    <div class="display-flex flex-col row-gap-4 flex-center vertical-padding">
      <div>
        <button
          pButton
          class="button-primary"
          (click)="catInteractions.updateRandomCatUrl()">Generate Cat 🐈‍⬛
        </button>
      </div>
      @if (catInteractions.$randomCatUrl()) {
        <div class="flex-center flex-col display-flex row-gap-4"
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
  textColor = input<string>('#3B82F6'); // Default to a blue color if not provided

  constructor(public readonly catInteractions: CatInteractionsService
  ) {
  }


}
