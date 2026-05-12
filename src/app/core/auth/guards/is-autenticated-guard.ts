import { inject } from '@angular/core';
import { CanActivateFn, RedirectCommand, Router } from '@angular/router';

export const isAutenticatedGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  const urlLogin = router.parseUrl('/auth/login');

  return new RedirectCommand(urlLogin);
};
