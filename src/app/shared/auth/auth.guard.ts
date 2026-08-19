import { inject } from '@angular/core';
import {
  CanMatchFn,
  Router
} from '@angular/router';
import { AuthFacade } from './auth.facade';

export const authGuard: CanMatchFn = async () => {
  const authFacade = inject(AuthFacade);
  const router = inject(Router);

  await authFacade.whenReady();
  return authFacade.isAuthenticated() || router.createUrlTree(['/']);
};
