import { inject } from '@angular/core';
import {
  CanMatchFn,
  Router
} from '@angular/router';
import { AuthFacade } from './auth.facade';

export const adminGuard: CanMatchFn = () => {
  const authFacade = inject(AuthFacade);
  const router = inject(Router);

  return authFacade.isAdmin() || router.createUrlTree(['/']);
};
