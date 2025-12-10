import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { CookieManager } from '../service/cookie-manager';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const httpManagerInterceptor: HttpInterceptorFn = (req, next) => {
  let cookieService = inject(CookieManager);
  let router = inject(Router);
  let email = '';
  console.log('httpManagerInterceptor called');
  console.log('tockenExists : ', cookieService.tockenExists('token'));
  if (cookieService.tockenExists('token')) {
    const token = cookieService.getToken('token');
    req = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
  }
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      return throwError(() => error);
    })
  );
};
