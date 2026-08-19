import {
  Injectable,
  signal
} from '@angular/core';
import { Session } from '@supabase/supabase-js';
import { supabase } from './supabase-client';

@Injectable({ providedIn: 'root' })
export class AuthStore {
  #session = signal<Session | null>(null);

  public session = this.#session.asReadonly();

  // Resolves once the initial session lookup completes, so route guards can wait
  // for it instead of reading `session` while it's still the pre-load `null` default.
  private readonly ready: Promise<void>;

  constructor() {
    this.ready = supabase.auth.getSession().then(({ data }) => {
      this.#session.set(data.session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      this.#session.set(session);
    });
  }

  public whenReady(): Promise<void> {
    return this.ready;
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
}
