import { afterNextRender, ChangeDetectionStrategy, Component, ElementRef, inject, Injector, signal, viewChild } from '@angular/core';
import { AccountMenuFacade } from './account-menu.facade';

@Component({
  selector: 'app-account-menu',
  templateUrl: './account-menu.component.html',
  styleUrl: './account-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AccountMenuFacade],
})
export class AccountMenuComponent {
  protected readonly facade = inject(AccountMenuFacade);
  private readonly injector = inject(Injector);
  private readonly panel = viewChild.required<ElementRef<HTMLElement>>('panel');

  protected readonly isOpen = signal(false);
  protected readonly appearanceOpen = signal(false);

  protected onToggle(event: Event): void {
    const open = (event as ToggleEvent).newState === 'open';
    this.isOpen.set(open);
    if (!open) {
      this.appearanceOpen.set(false);
    }
  }

  protected openAppearance(): void {
    this.appearanceOpen.set(true);
    this.focusAfterRender('[data-theme-option][aria-pressed="true"]');
  }

  protected back(): void {
    this.appearanceOpen.set(false);
    this.focusAfterRender('[data-appearance]');
  }

  protected authenticate(): void {
    this.panel().nativeElement.hidePopover();
    if (this.facade.isAuthenticated()) {
      this.facade.signOut();
    } else {
      this.facade.signIn();
    }
  }

  private focusAfterRender(selector: string): void {
    afterNextRender(() => this.panel().nativeElement.querySelector<HTMLElement>(selector)?.focus(), { injector: this.injector });
  }
}
