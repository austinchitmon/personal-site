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
import { ToolbarModule } from '@openng/optimus-ui/toolbar';
import { AuthFacade } from '../../shared/auth/auth.facade';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { resolveNavEntries } from './nav-bar.const';
import { AccountMenuComponent } from './account-menu/account-menu.component';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive, BurgerMenuComponent, ToolbarModule, AccountMenuComponent],
  template: `
    <p-toolbar class="navbar">
      <ng-template pTemplate="start">
        <div class="display-flex flex-row col-gap-4">
          <a routerLink="/"
             class="navbar-brand">
            CHITMON.COM
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
        <app-account-menu/>
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
    resolveNavEntries(this.authFacade.isAdmin())
  );
}
