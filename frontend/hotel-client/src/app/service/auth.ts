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
}
