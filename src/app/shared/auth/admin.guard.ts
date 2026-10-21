import { inject } from '@angular/core';
import {
  CanMatchFn,
  CanActivateChildFn,
  Router
} from '@angular/router';
import { AuthFacade } from './auth.facade';

const checkAdminAccess = async () => {
  const authFacade = inject(AuthFacade);
  const router = inject(Router);

  try {
    await authFacade.whenReady();
  } catch {
    return router.createUrlTree(['/']);
  }
  return authFacade.isAdmin() || router.createUrlTree(['/']);
};

export const adminGuard: CanMatchFn = checkAdminAccess;
export const adminChildGuard: CanActivateChildFn = checkAdminAccess;
