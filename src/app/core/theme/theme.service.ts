import { DOCUMENT } from '@angular/common';
import { computed, inject, Injectable, signal } from '@angular/core';
import { DEFAULT_THEME, isSiteThemeId, SITE_THEMES, SiteThemeId, THEME_STORAGE_KEY } from './site-themes';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly activeTheme = signal<SiteThemeId>(DEFAULT_THEME);

  public readonly current = this.activeTheme.asReadonly();
  public readonly name = computed(() => SITE_THEMES[this.current()].name);
  public readonly isDark = computed(() => SITE_THEMES[this.current()].scheme === 'dark');

  constructor() {
    let saved: string | null = null;
    try {
      saved = this.document.defaultView?.localStorage.getItem(THEME_STORAGE_KEY) ?? null;
    } catch {
      // Themes still work when browser storage is unavailable.
    }
    this.apply(isSiteThemeId(saved) ? saved : DEFAULT_THEME);
  }

  public toggle(): void {
    this.setTheme(this.isDark() ? 'miami-day' : 'miami-dusk');
  }

  public setTheme(id: SiteThemeId): void {
    this.apply(id);
    try {
      this.document.defaultView?.localStorage.setItem(THEME_STORAGE_KEY, id);
    } catch {
      // A blocked preference store must not prevent a theme change.
    }
  }

  private apply(id: SiteThemeId): void {
    const theme = SITE_THEMES[id];
    const root = this.document.documentElement;
    root.dataset['siteTheme'] = id;
    root.dataset['colorScheme'] = theme.scheme;
    root.style.colorScheme = theme.scheme;
    for (const [step, value] of Object.entries(theme.primaryPalette)) {
      root.style.setProperty(`--site-primary-${step}`, value);
    }
    for (const [token, value] of Object.entries(theme.colors)) {
      root.style.setProperty(`--site-${token}`, value);
    }
    this.document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme.colors.background);
    this.activeTheme.set(id);
  }
}
