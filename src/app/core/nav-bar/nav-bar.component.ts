import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive
} from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { DEFAULT_NAV_BAR_ENTRIES } from './nav-bar.const';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgOptimizedImage, BurgerMenuComponent, ToolbarModule],
  template: `
    <p-toolbar class="navbar">
      <ng-template pTemplate="start">
        <div class="display-flex flex-row col-gap">
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
          <ul class="navbar-links hide-sm">
            @for (entry of DEFAULT_NAV_BAR_ENTRIES; track $index) {
              <li class="text-align-center">
                <a [routerLink]="entry.routerLink"
                   routerLinkActive="active">
                  {{entry.label}}
                </a>
              </li>
            }
          </ul>
        </div>
      </ng-template>

      <ng-template pTemplate="end">
        <app-burger-menu class="show-sm hide-lg"/>

      </ng-template>
    </p-toolbar>
  `,
  styleUrl: './nav-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent {
  public readonly DEFAULT_NAV_BAR_ENTRIES = DEFAULT_NAV_BAR_ENTRIES;
}
