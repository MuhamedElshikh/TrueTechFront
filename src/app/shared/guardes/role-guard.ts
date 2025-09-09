import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Authservises } from '../servises/auth/authservises';
import { inject } from '@angular/core';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree => {
  const auth = inject(Authservises);
  const router = inject(Router);

  const isLogged = auth.isLoggedIn();
  const role = auth.getUserrole();
  const expected = route.data?.['role'] as 'Admin' | 'Custmor' | undefined;

  if (!isLogged) {
    return router.parseUrl('/auth/login');
  }

  if (expected && role !== expected) {
    return router.parseUrl(role === 'Admin' ? '/admin' : '/user');
  }

  return true;
};
