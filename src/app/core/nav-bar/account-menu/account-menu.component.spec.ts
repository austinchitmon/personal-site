import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthFacade } from '../../../shared/auth/auth.facade';
import { THEME_STORAGE_KEY } from '../../theme/site-themes';
import { AccountMenuComponent } from './account-menu.component';

describe('AccountMenuComponent', () => {
  let fixture: ComponentFixture<AccountMenuComponent>;
  const auth = { isAuthenticated: signal(false), login: vi.fn(), logout: vi.fn() };

  function button(selector: string): HTMLButtonElement {
    return fixture.nativeElement.querySelector(selector);
  }

  beforeEach(async () => {
    localStorage.removeItem(THEME_STORAGE_KEY);
    auth.isAuthenticated.set(false);
    auth.login.mockClear();
    auth.logout.mockClear();
    await TestBed.configureTestingModule({
      imports: [AccountMenuComponent],
      providers: [{ provide: AuthFacade, useValue: auth }],
    }).compileComponents();
    fixture = TestBed.createComponent(AccountMenuComponent);
    fixture.detectChanges();
    // jsdom does not implement the browser's native Popover API.
    Object.defineProperty(fixture.nativeElement.querySelector('[popover]'), 'hidePopover', { value: vi.fn() });
  });

  afterEach(() => {
    localStorage.removeItem(THEME_STORAGE_KEY);
    document.documentElement.removeAttribute('style');
    document.documentElement.removeAttribute('data-site-theme');
    document.documentElement.removeAttribute('data-color-scheme');
  });

  it('offers theme selection without starting sign-in', () => {
    button('[data-appearance]').click();
    fixture.detectChanges();
    const options = fixture.nativeElement.querySelectorAll('[data-theme-option]');
    expect(options.length).toBe(2);
    expect(options[0].getAttribute('aria-pressed')).toBe('true');
    options[1].click();
    fixture.detectChanges();
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('miami-dusk');
    expect(options[1].getAttribute('aria-pressed')).toBe('true');
    expect(auth.login).not.toHaveBeenCalled();
    expect(auth.logout).not.toHaveBeenCalled();
  });

  it('shows the selected appearance when returning to the account panel', () => {
    button('[data-appearance]').click();
    fixture.detectChanges();
    fixture.nativeElement.querySelectorAll('[data-theme-option]')[1].click();
    button('[aria-label="Back to account menu"]').click();
    fixture.detectChanges();
    expect(button('[data-appearance]').textContent).toContain('Miami after dark');
  });

  it('signs in from the guest account menu', () => {
    const action = [...(fixture.nativeElement as HTMLElement).querySelectorAll<HTMLButtonElement>('.menu-row')]
      .find(item => item.textContent?.includes('Sign in'));
    action?.click();
    expect(auth.login).toHaveBeenCalledOnce();
    expect(auth.logout).not.toHaveBeenCalled();
  });

  it('offers sign-out for an authenticated visitor', () => {
    auth.isAuthenticated.set(true);
    fixture.detectChanges();
    const action = [...(fixture.nativeElement as HTMLElement).querySelectorAll<HTMLButtonElement>('.menu-row')]
      .find(item => item.textContent?.includes('Sign out'));
    action?.click();
    expect(auth.logout).toHaveBeenCalledOnce();
    expect(auth.login).not.toHaveBeenCalled();
  });
});
