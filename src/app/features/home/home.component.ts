import { NgOptimizedImage } from '@angular/common';
import {
  Component,
  Signal,
  signal
} from '@angular/core';
import { CatInteractionsService } from './cat.interactions.service';
import { CatStore } from './cat.store';

@Component({
  selector: 'app-home',
  providers: [
    CatStore,
    CatInteractionsService
  ],
  imports: [
    NgOptimizedImage
  ],
  templateUrl: `./home.component.html`,
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
