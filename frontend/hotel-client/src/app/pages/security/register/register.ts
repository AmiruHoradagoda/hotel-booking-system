import { MatButton } from '@angular/material/button';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { Auth } from '../../../service/auth';
import { CookieManager } from '../../../service/cookie-manager';
import { Component, OnInit } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    RouterLink,
    MatFormField,
  ],
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
})
export class Register implements OnInit {
  loading: boolean = false;
  constructor(
    private authService: Auth,
    private router: Router,
    private cookieManager: CookieManager
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.cookieManager.clearAll();
    }, 100);
  }

  form: FormGroup = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern(/^[A-Za-z]+$/),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern(/^[A-Za-z]+$/),
    ]),
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
    contact: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  createUser() {
    this.loading = true;
    if (this.form.valid) {
      const firstName = this.form.get('firstName')?.value.trim();
      const lastName = this.form.get('lastName')?.value.trim();
      const email = this.form.get('email')?.value.trim();
      const password = this.form.get('password')?.value.trim();
      const contact = this.form.get('contact')?.value.trim();
      this.authService
        .register(firstName, lastName, email, password, contact)
        .subscribe({
          next: (response) => {
            console.log(response);
            this.loading = false;
            this.form.reset();
            this.router.navigateByUrl(
              '/security/register-verification/' + email
            );
            alert('Registration successful! Please verify your email.');
          },
          error: (error) => {
            console.error('Error occurred during registration:', error);
            this.loading = false;
          },
        });
    }

    return;
  }
}
