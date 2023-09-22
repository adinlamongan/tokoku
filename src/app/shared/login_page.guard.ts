import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { StorageService } from '../_services/storage.service';

export const loginPageGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const auth = inject(StorageService);
  const router = inject(Router);
  const login = auth.isLoggedIn();
  const urlName = window.location.pathname;
    if (login && (urlName === '/login' || urlName === '/register')) {
      router.navigate(['/']);
      return false;
    }
  return true;
};
