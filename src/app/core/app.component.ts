import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent],
  template: `
    <div class="display-flex flex-col height-100vh">
      <app-nav-bar/>
      <div class="flex-1">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
