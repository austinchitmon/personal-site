import { Component, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: `./app.component.html`,
  styleUrl: './app.component.scss',
})
export class AppComponent {
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

  constructor() {
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
