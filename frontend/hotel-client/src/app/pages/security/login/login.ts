import { Component } from '@angular/core';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../../service/auth';
import { CookieManager } from '../../../service/cookie-manager';

@Component({
  selector: 'app-login',
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    MatButton,
    MatCheckbox,
    FormsModule,
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  showStatus: boolean = false;
  loading = false;
  constructor(
    private authService: Auth,
    private cookieService: CookieManager,
    private router: Router
  ) {}

  form = new FormGroup({
    email: new FormControl('', [
      Validators.email,
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(/^(?=.*[@&$])[A-Za-z0-9@&$]{6,}$/),
      Validators.pattern(/^\S*$/),
    ]),
  });

  login() {
    this.loading = true;
    if (this.form.valid) {
      this.authService
        .login(this.form.value.email!, this.form.value.password!)
        .subscribe((resp) => {
          this.loading = false;
          this.cookieService.set(resp?.data?.access_token, 'token');
          this.router.navigateByUrl('/settings');
          alert('Login Successful!');
        });
    }
    this.loading = false;
  }
}
