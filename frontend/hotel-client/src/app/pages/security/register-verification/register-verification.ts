import { Component, inject, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-register-verification',
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
  templateUrl: './register-verification.html',
  styleUrl: './register-verification.scss',
})
export class RegisterVerification implements OnInit {
  email: any;
  loading = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: Auth,
    private router: Router
  ) {}

  form = new FormGroup({
    otp: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  ngOnInit(): void {
    //this.email = this.activatedRoute.snapshot.paramMap.get('email');
    this.activatedRoute.paramMap.subscribe((resp) => {
      this.email = resp.get('email');
    });
  }

  veryfyCode() {
    this.loading = true;
    if (this.form.valid) {
      this.authService
        .verifyOtp(this.email, this.form.value.otp!.trim())
        .subscribe(
          (resp) => {
            alert('Verification Successful! Please login to your account.');
            this.router.navigateByUrl('/secuirity/login');
          },
          (error) => {
            this.loading = false;
            alert('Invalid OTP! Please try again.');
            console.log(error);
          }
        );
    }
  }

  resend() {
    this.loading = true;
    this.authService.resend(this.email).subscribe(
      (resp) => {
        alert('OTP resend successful! Please check your email.');
        this.router.navigateByUrl('/security/register-verification/' + this.email);
      },
      (error) => {
        alert('Error in resending OTP! Please try again.');
        console.log(error);
      }
    );
  }

  
}
