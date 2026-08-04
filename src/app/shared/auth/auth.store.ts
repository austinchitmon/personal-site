import {
  inject,
  Injectable,
  signal
} from '@angular/core';
import { Session } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';
import { ApiService } from '../api/api.service';
import { supabase } from './supabase-client';

@Injectable({ providedIn: 'root' })
export class AuthStore {
  private readonly api = inject(ApiService);

  #session = signal<Session | null>(null);
  private lastSyncedUserId: string | null = null;

  public session = this.#session.asReadonly();

  constructor() {
    supabase.auth.getSession().then(({ data }) => this.setSession(data.session));

    supabase.auth.onAuthStateChange((_event, session) => {
      this.setSession(session);
    });
  }

  public signInWithGoogle(): void {
    supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin }
    });
  }

  public signOut(): void {
    supabase.auth.signOut();
  }

  private setSession(session: Session | null): void {
    this.#session.set(session);

    if (!session) {
      this.lastSyncedUserId = null;
      return;
    }

    // supabase-js emits multiple events for what's really one login (getSession(),
    // INITIAL_SESSION, token refreshes, ...) — only sync once per distinct
    // signed-in user rather than once per event.
    if (session.user.id !== this.lastSyncedUserId) {
      this.lastSyncedUserId = session.user.id;
      this.syncUser();
    }
  }

  // Mirrors this user into the backend's core.users table, independent of
  // admin status/routing — not just admin-gated features call the backend.
  // Fire-and-forget: a sync failure shouldn't block the frontend's own auth state.
  private syncUser(): void {
    this.api.get(`${environment.apiBase}/me`).subscribe({
      error: (err) => console.error('Failed to sync user with backend', err)
    });
  }
}
