import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive
} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive, NgOptimizedImage],
  template: `
    <nav class="navbar">
      <div class="navbar-container">
        <a routerLink="/"
           class="navbar-brand">
          <div class="display-flex flex-row">
            <div class="logo-container">
              <img [ngSrc]="'/img/logo/logo-medium.png'"
                   class="logo spinner"
                   alt="Website logo"
                   fill
                   [style.object-fit]="'contain'"
              >
            </div>
            <span class="site-name">itmon.com</span>
          </div>
        </a>
        <ul class="navbar-links">
          <li><a routerLink="/chittymon"
                 routerLinkActive="active">Chittymon</a></li>
        </ul>
      </div>
    </nav>

  `,
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
}
