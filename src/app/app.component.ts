import { Component, OnInit, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  template: `
    <div class="container">
      <h1 class="wip-message" [style.color]="textColor()">WORK IN PROGRESS!!!! :D :D :D :D :D</h1>
      <img
        class="sal-spin"
        alt="Sal Vulcano Meme Pic He Hates"
        src="img/sal/Sal.webp"
      />
      <div class="subtext-container">
        <p>all the sals are saling, saling</p>
        <p class="align-self-end">- le ssalifim</p>
      </div>
    </div>
  `,
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
      this._textColor.set(this.getRandomColor(this.BASE_COLORS))
    }, 500); // Change color every second
  }

  private getRandomColor(list: string[]): string {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
  }
}
