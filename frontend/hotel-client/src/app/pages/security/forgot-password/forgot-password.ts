import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../../service/auth';

@Component({
  selector: 'app-forgot-password',
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
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss',
})
export class ForgotPassword {
  loading = false;
  constructor(private authService: Auth, private router: Router) {}

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  public fogetPasswordRequest() {
    const emailControl = this.form.get('email')?.value!.trim();
    if (this.form.valid) {
      this.authService
        .fogetPasswordRequest(emailControl!)
        .subscribe((response) => {
          this.loading = false;
          this.router.navigateByUrl(
            '/security/reset-pwd-verification/' +
              this.form.get('email')?.value!.trim()
          );
          alert(response.message);
        });
    }
  }
}
