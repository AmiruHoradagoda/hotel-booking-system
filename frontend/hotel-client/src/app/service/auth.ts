import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  baseUrl: string = environment.baseUrl + 'user-service/api/v1/users/visitors/';

  constructor(private http: HttpClient) {}

  //   {
  //   "firstName": "Supun",
  //   "lastName": "Sathsara",
  //   "email": "supun@gmail.com",
  //   "password": "supun@123",
  //   "contact": "0771234567"
  // }

  public register(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    contact: string
  ): Observable<any> {
    return this.http.post(this.baseUrl + 'signup', {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      contact: contact,
    });
  }

  public verifyOtp(email: string, otp: string): Observable<any> {
    return this.http.post(
      this.baseUrl + `verify-email?email=${email}&otp=${otp}`,
      {}
    );
  }

  public resend(email: string): Observable<any> {
    return this.http.post(this.baseUrl + `verify-email?email=${email}`, {});
  }
  public login(email: string, password: string): Observable<any> {
    return this.http.post(this.baseUrl + 'login', {
      email: email,
      password: password,
    });
  }

  // forget password related methods

  public fogetPasswordRequest(email: string): Observable<any> {
    return this.http.post(
      this.baseUrl + `forget-password-request-code?email=${email}`,
      {}
    );
  }

  public verifyResetPassword(email: string, otp: string): Observable<any> {
    return this.http.post(
      this.baseUrl + `verify-reset?email=${email}&otp=${otp}`,
      {}
    );
  }

  public resetPassword(
    email: string,
    password: string,
    otp: string
  ): Observable<any> {
    return this.http.post(this.baseUrl + 'reset-password', {
      email: email,
      password: password,
      code: otp,
    });
  }
}
