import { Component } from '@angular/core';
import { RandomCatComponent } from '../../features/random-cat/random-cat.component';
import { HomeStore } from './home.store';

@Component({
  selector: 'app-home',
  providers: [
    HomeStore
  ],
  imports: [
    RandomCatComponent
  ],
  template: `
    <div class="page-container">
      <h1 class="wip-message text-align-center"
          [style.color]="homeStore.textColor()">
        ⚠️WORK IN PROGRESS!⚠️
      </h1>
      <h2 class="text-align-center">Welcome to Austin Chitmon's Personal Website 🚀</h2>
      <p class="text-align-center">Not much to do yet... but feel free to take a cat photo 😸</p>
      <app-random-cat [textColor]="homeStore.textColor()"/>
    </div>

  `,
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(public homeStore: HomeStore) {}
}
