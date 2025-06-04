import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive
} from '@angular/router';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { DEFAULT_NAV_BAR_ENTRIES } from './nav-bar.const';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive, NgOptimizedImage, BurgerMenuComponent],
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
            <span class="site-name hide-sm">itmon.com</span>
          </div>
        </a>
        <app-burger-menu class="show-sm hide-lg"/>
        <ul class="navbar-links hide-sm">
          @for (entry of DEFAULT_NAV_BAR_ENTRIES; track $index) {
            <li>
              <a [routerLink]="entry.routerLink"
                 routerLinkActive="active">
                {{entry.label}}
              </a>
            </li>
          }
        </ul>
      </div>
    </nav>

  `,
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  public readonly DEFAULT_NAV_BAR_ENTRIES = DEFAULT_NAV_BAR_ENTRIES;
}
