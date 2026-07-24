import {
  computed,
  inject,
  Injectable
} from '@angular/core';
import { AuthStore } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  private readonly store = inject(AuthStore);

  public isAuthenticated = computed(() => !!this.store.session());
  public isAdmin = computed(() => this.store.session()?.user?.app_metadata?.['role'] === 'admin');

  public login(): void {
    this.store.signInWithGoogle();
  }

  public logout(): void {
    this.store.signOut();
  }
}
