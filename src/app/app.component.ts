import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
  <div class="container">
    <h1 class="wip-message">
      WORK IN PROGRESS!!!! :D :D :D
    </h1>
    <img class="sal-spin" alt="Sal Vulcano Meme Pic He Hates" src="img/sal/Sal.webp"/>
  </div>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
