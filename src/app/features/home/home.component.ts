import { NgOptimizedImage } from '@angular/common';
import {
  Component,
  Signal,
  signal
} from '@angular/core';
import { CatInteractionsService } from './random-cat/cat.interactions.service';
import { CatStore } from './random-cat/cat.store';

@Component({
  selector: 'app-home',
  providers: [
    CatStore,
    CatInteractionsService
  ],
  imports: [
    NgOptimizedImage
  ],
  template: `
    <div class="page-container">
      <h1 class="wip-message"
          [style.color]="textColor()">
        WORK IN PROGRESS!
      </h1>
      <img
        class="sal-spin"
        alt="Sal Vulcano Meme Pic He Hates"
        src="img/sal/Sal.webp"
      />
      <div [style.padding-top]="'3rem'">
        <button
          class="button-1"
          (click)="catInteractions.updateRandomCatUrl()">Randomize Cat :3
        </button>
      </div>
      @if (catInteractions.$randomCatUrl()) {
        <div class="flex-center flex-col display-flex"
             [style.visibility]="catInteractions.$imageLoading() ? 'hidden' : 'visible'">
          <div [style.width]="'15rem'"
               [style.height]="'15rem'"
               [style.position]="'relative'"
               [style.border-width]="'.5rem'"
               [style.border-style]="'dotted'"
               [style.border-color]="textColor()"
          >
            <img
              [style.object-fit]="'contain'"
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
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public textColor: Signal<string>;
  private readonly BASE_COLORS: string[] = [
    '#B48',
    '#B4B',
    '#84B',
    '#44B',
    '#48B',
    '#4BB',
    '#4B8',
    '#4B4',
    '#8B4',
    '#BB4',
    '#B84',
    '#B44',
  ];
  private _textColor = signal<string>(this.BASE_COLORS[0]);

  constructor(
    public readonly catInteractions: CatInteractionsService
  ) {
    this.textColor = this._textColor;
    this.startRandomColorInterval();
  }

  private startRandomColorInterval(): void {
    setInterval(() => {
      this._textColor.set(this.getRandomColor(this.BASE_COLORS));
    }, 500);
  }

  private getRandomColor(list: string[]): string {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
  }
}
