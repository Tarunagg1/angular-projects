import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponse } from 'src/app/models/auth-response';
import { DesignutilityService } from 'src/app/service/designutility.service';
import { ErrorService } from 'src/app/service/error.service';
import { SocialAuthService } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  loginMode: boolean = true;
  error: any;

  constructor(
    private fb: FormBuilder,
    private authService: DesignutilityService,
    private errorService: ErrorService,
    private router: Router,
    private AuthService: SocialAuthService
  ) {}

  Form!: FormGroup;

  ngOnInit(): void {
    this.Form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onModeSwitch() {
    this.loginMode = !this.loginMode;
  }

  onGoogleSignIn() {
    this.AuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((res) => {
        console.log(res);
        this.authService.googleSignIn(res.idToken).subscribe(
          (data) => {
            console.log(data);
          },
          (error) => {
            console.log(error);
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onSubmit() {
    let authObservable: Observable<AuthResponse>;

    if (!this.Form.valid) {
      alert('Validation failed');
    } else {
      const { email, password } = this.Form.value;
      if (this.loginMode) {
        authObservable = this.authService.signIn(email, password);
      } else {
        authObservable = this.authService.signUp(email, password);
      }

      authObservable.subscribe(
        (data) => {
          this.router.navigate(['/dashboard']);
        },
        (err) => {
          this.error = err;
        }
      );
    }
  }
}
