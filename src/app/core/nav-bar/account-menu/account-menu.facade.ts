import { inject, Injectable } from '@angular/core';
import { AuthFacade } from '../../../shared/auth/auth.facade';
import { SITE_THEMES, SiteThemeId } from '../../theme/site-themes';
import { ThemeService } from '../../theme/theme.service';

@Injectable()
export class AccountMenuFacade {
  private readonly auth = inject(AuthFacade);
  private readonly themes = inject(ThemeService);

  public readonly isAuthenticated = this.auth.isAuthenticated;
  public readonly themeName = this.themes.name;
  public readonly currentTheme = this.themes.current;
  public readonly themeOptions = Object.entries(SITE_THEMES).map(([id, theme]) => ({
    id: id as SiteThemeId,
    name: theme.name,
    icon: theme.scheme === 'dark' ? 'pi pi-moon' : 'pi pi-sun',
  }));

  public setTheme(id: SiteThemeId): void {
    this.themes.setTheme(id);
  }

  public signIn(): void {
    this.auth.login();
  }

  public signOut(): void {
    this.auth.logout();
  }
}
