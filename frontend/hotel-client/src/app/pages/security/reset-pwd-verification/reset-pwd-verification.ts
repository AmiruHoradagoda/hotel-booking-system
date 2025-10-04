import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Auth } from '../../../service/auth';
import { response } from 'express';

@Component({
  selector: 'app-reset-pwd-verification',
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
  templateUrl: './reset-pwd-verification.html',
  styleUrl: './reset-pwd-verification.scss',
})
export class ResetPwdVerification implements OnInit {
  loading = false;
  email: any = '';

  form = new FormGroup({
    otp: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  constructor(
    private authService: Auth,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((resp) => {
      this.email = resp.get('email');
    });
  }

  public verifyEmail() {
    const otpControl = this.form.get('otp')?.value!.trim();
    this.authService.verifyResetPassword(this.email, otpControl!).subscribe(
      (response) => {
        alert(response.message);
        this.loading = false;
        // this.router.navigateByUrl('/security/reset-pwd');
        this.router.navigate(['/security/reset-pwd'], {
          queryParams: { email: this.email, otp: otpControl },
        });
      },
      (err) => {
        // handle error
        if (err.error && err.error.message) {
          alert('Error: ' + err.error.message);
        } else {
          alert('Something went wrong. Please try again.');
        }
        this.loading = false;
      }
    );
  }
}
