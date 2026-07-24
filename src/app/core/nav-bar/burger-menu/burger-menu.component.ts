import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthFacade } from '../../../shared/auth/auth.facade';
import {
  ADMIN_NAV_ENTRY,
  DEFAULT_NAV_BAR_ENTRIES
} from '../nav-bar.const';

@Component({
  selector: 'app-burger-menu',
  imports: [
    RouterLink
  ],
  host: {
    '(document:click)': 'onClickOutside($event)'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="burger-container">
      <button (click)="toggleMenu()"
              class="burger-button">
        <span class="burger-icon">☰</span>
      </button>

      @if (menuOpen()) {
        <div class="menu">
          @for (entry of navEntries(); track $index) {
            <a
              [routerLink]="entry.routerLink"
              (click)="closeMenu()">
              {{entry.label}}
            </a>
          }
        </div>
      }
    </div>
  `,
  styleUrl: './burger-menu.component.scss'
})
export class BurgerMenuComponent {
  private readonly authFacade = inject(AuthFacade);

  protected readonly menuOpen = signal(false);
  protected readonly navEntries = computed(() =>
    this.authFacade.isAdmin() ? [...DEFAULT_NAV_BAR_ENTRIES, ADMIN_NAV_ENTRY] : DEFAULT_NAV_BAR_ENTRIES
  );


  toggleMenu() {
    this.menuOpen.update(open => !open);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.burger-container')) {
      this.closeMenu();
    }
  }
}
