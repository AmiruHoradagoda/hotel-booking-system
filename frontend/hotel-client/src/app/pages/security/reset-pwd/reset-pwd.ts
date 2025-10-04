import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Auth } from '../../../service/auth';
import { F } from '@angular/cdk/keycodes';

// Custom validator function
export const passwordMatchValidator: ValidatorFn = (
  form: AbstractControl
): ValidationErrors | null => {
  const password = form.get('password')?.value;
  const conformPassword = form.get('conformPassword')?.value;
  if (password && conformPassword && password !== conformPassword) {
    return { passwordMismatch: true };
  }
  return null;
};

@Component({
  selector: 'app-reset-pwd',
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
  templateUrl: './reset-pwd.html',
  styleUrl: './reset-pwd.scss',
})
export class ResetPwd implements OnInit {
  email: string = '';
  otp: string = '';
  loading = false;

  form = new FormGroup(
    {
      password: new FormControl('', [
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[@&$])[A-Za-z0-9@&$]{6,}$/),
        Validators.pattern(/^\S*$/),
      ]),
      conformPassword: new FormControl('', [
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[@&$])[A-Za-z0-9@&$]{6,}$/),
        Validators.pattern(/^\S*$/),
      ]),
    },
    { validators: passwordMatchValidator }
  );

  constructor(
    private authService: Auth,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.email = params['email'];
      this.otp = params['otp'];
    });
  }

  public resetPassword() {
    this.loading = true;
    const password = this.form.get('password')?.value!.trim();

    this.authService.resetPassword(this.email, password!, this.otp).subscribe(
      (response) => {
        this.loading = false;
        alert(response.message);
        this.router.navigateByUrl('/security/login');
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
