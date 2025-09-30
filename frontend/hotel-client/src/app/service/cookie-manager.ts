import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class CookieManager {
  constructor(private cookieService: CookieService, private router: Router) {}

  public set(token: string, name: string): void {
    const expireDate = new Date();
    expireDate.setHours(expireDate.getHours() + 9); // 9 hours expiration
    this.cookieService.set(name, token, expireDate, '/');
  }

  public tockenExists(name: string): boolean {
    return this.cookieService.check(name);
  }

  public clearToken(name: string): void {
    if (this.tockenExists(name)) {
      this.cookieService.delete(name);
    }
  }
  public clearAll(): void {
    this.cookieService.deleteAll('/');
  }

  public getToken(name: string): string {
    return this.cookieService.get(name);
  }

  public tokenExistsWithPromise(name: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        const exists = this.cookieService.check(name);
        resolve(exists);
      } catch (error) {
        reject(error);
      }
    });
  }
}
