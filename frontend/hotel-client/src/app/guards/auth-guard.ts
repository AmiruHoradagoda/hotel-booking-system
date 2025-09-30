import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieManager } from '../service/cookie-manager';

export const authGuard: CanActivateFn = (route, state) => {
  const cookieManager: CookieManager = inject(CookieManager);
  const router: Router = inject(Router);

 return cookieManager
    .tokenExistsWithPromise('token')
    .then((resp:any) => {
     if(resp) {
       return true;
     } else {
       router.navigate(['/security/login']);
       return false;
     }
    })
    .catch(() => {
      router.navigate(['/security/login']);
      return false;
    });
};
