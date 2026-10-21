import { TestBed } from '@angular/core/testing';
import { SITE_THEMES, THEME_STORAGE_KEY } from './site-themes';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  beforeEach(() => {
    localStorage.removeItem(THEME_STORAGE_KEY);
    TestBed.configureTestingModule({});
  });

  afterEach(() => {
    localStorage.removeItem(THEME_STORAGE_KEY);
    document.documentElement.removeAttribute('data-site-theme');
    document.documentElement.removeAttribute('data-color-scheme');
    document.documentElement.removeAttribute('style');
    vi.restoreAllMocks();
  });

  it('starts with Daylight', () => {
    const service = TestBed.inject(ThemeService);
    expect(service.current()).toBe('miami-day');
    expect(document.documentElement.style.getPropertyValue('--site-background')).toBe(SITE_THEMES['miami-day'].colors.background);
    expect(document.documentElement.style.getPropertyValue('--site-primary-600')).toBe(SITE_THEMES['miami-day'].primaryPalette[600]);
  });

  it('restores a saved theme and applies it to app and component styles', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'miami-dusk');
    const service = TestBed.inject(ThemeService);
    expect(service.isDark()).toBe(true);
    expect(document.documentElement.dataset['siteTheme']).toBe('miami-dusk');
    expect(document.documentElement.dataset['colorScheme']).toBe('dark');
    expect(document.documentElement.style.colorScheme).toBe('dark');
  });

  it('rejects unknown stored themes', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'unknown-theme');
    expect(TestBed.inject(ThemeService).current()).toBe('miami-day');
  });

  it('restores Bubble Gum as a light theme with its own component palette', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'bubble-gum');
    const service = TestBed.inject(ThemeService);
    expect(service.name()).toBe('Bubble Gum');
    expect(service.isDark()).toBe(false);
    expect(document.documentElement.dataset['colorScheme']).toBe('light');
    expect(document.documentElement.style.getPropertyValue('--site-primary-600')).toBe(SITE_THEMES['bubble-gum'].primaryPalette[600]);
  });

  it('persists a switch and can return to daylight', () => {
    const service = TestBed.inject(ThemeService);
    service.toggle();
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('miami-dusk');
    service.toggle();
    expect(service.current()).toBe('miami-day');
  });

  it('restores Bubble Gum Dark with its neon palette and dark component scheme', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'bubble-gum-dark');
    const service = TestBed.inject(ThemeService);
    expect(service.name()).toBe('Bubble Gum Dark');
    expect(service.isDark()).toBe(true);
    expect(document.documentElement.dataset['colorScheme']).toBe('dark');
    expect(document.documentElement.style.getPropertyValue('--site-primary-400')).toBe(SITE_THEMES['bubble-gum-dark'].primaryPalette[400]);
  });

  it('still changes themes when browser storage is blocked', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => { throw new Error('Blocked'); });
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new Error('Blocked'); });
    const service = TestBed.inject(ThemeService);
    service.toggle();
    expect(service.current()).toBe('miami-dusk');
    expect(document.documentElement.dataset['siteTheme']).toBe('miami-dusk');
  });
});
