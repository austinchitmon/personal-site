import { HttpInterceptorFn } from '@angular/common/http';
import { from, switchMap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { supabase } from './supabase-client';

/**
 * Attaches the current Supabase session's access token to requests against
 * our own backend (environment.apiBase) only — never to Supabase itself
 * (supabase-js already handles that) or other third-party hosts.
 * Reads via getSession() rather than a cached signal so a soon-to-expire
 * token gets auto-refreshed by supabase-js before the request goes out.
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if (!req.url.startsWith(environment.apiBase)) {
    return next(req);
  }

  return from(supabase.auth.getSession()).pipe(
    switchMap(({ data }) => {
      const token = data.session?.access_token;
      if (!token) {
        return next(req);
      }
      return next(req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }));
    })
  );
};
