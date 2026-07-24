import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject
} from '@angular/core';
import {
  RouterLink,
  RouterLinkActive
} from '@angular/router';
import { ButtonModule } from '@openng/optimus-ui/button';
import { ToolbarModule } from '@openng/optimus-ui/toolbar';
import { TooltipModule } from '@openng/optimus-ui/tooltip';
import { AuthFacade } from '../../shared/auth/auth.facade';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import {
  ADMIN_NAV_ENTRY,
  DEFAULT_NAV_BAR_ENTRIES
} from './nav-bar.const';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgOptimizedImage, BurgerMenuComponent, ToolbarModule, ButtonModule, TooltipModule],
  template: `
    <p-toolbar class="navbar">
      <ng-template pTemplate="start">
        <div class="display-flex flex-row col-gap-4">
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
            @for (entry of navEntries(); track $index) {
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
        @if (authFacade.isAuthenticated()) {
          <p-button
            icon="pi pi-sign-out"
            [text]="true"
            [rounded]="true"
            pTooltip="Sign out"
            tooltipPosition="bottom"
            (click)="authFacade.logout()"
          />
        } @else {
          <p-button
            icon="pi pi-user"
            [text]="true"
            [rounded]="true"
            pTooltip="Sign in with Google"
            tooltipPosition="bottom"
            (click)="authFacade.login()"
          />
        }
        <app-burger-menu class="show-sm hide-lg"/>
      </ng-template>
    </p-toolbar>
  `,
  styleUrl: './nav-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent {
  protected readonly authFacade = inject(AuthFacade);

  protected readonly navEntries = computed(() =>
    this.authFacade.isAdmin() ? [...DEFAULT_NAV_BAR_ENTRIES, ADMIN_NAV_ENTRY] : DEFAULT_NAV_BAR_ENTRIES
  );
}
