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

  constructor() {
    supabase.auth.getSession().then(({ data }) => this.#session.set(data.session));

    supabase.auth.onAuthStateChange((_event, session) => {
      this.#session.set(session);
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
}
