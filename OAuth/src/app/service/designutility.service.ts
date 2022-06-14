import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap } from 'rxjs';
import { config } from 'src/config/config';
import { AuthResponse } from '../models/auth-response';
import { User } from '../models/user.model';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class DesignutilityService {
  api_url = config.API_URL;
  user = new BehaviorSubject<User | null>(
    JSON.parse(localStorage.getItem('userData'))
  );

  private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private errorService: ErrorService) {}

  saveData() {
    return this.http.get(`${this.api_url}/saveData`);
  }

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponse>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${config.API_KEY}`,
        {
          email,
          password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError((error) => {
          return this.errorService.handelError(error);
        }),
        tap((response) => {
          this.authencateUser(
            response.email,
            response.localId,
            response.idToken,
            +response.expiresIn
          );
        })
      );
  }

  signIn(email: string, password: string) {
    return this.http
      .post<AuthResponse>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${config.API_KEY}`,
        {
          email,
          password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError((error) => {
          return this.errorService.handelError(error);
        }),
        tap((response) => {
          this.authencateUser(
            response.email,
            response.localId,
            response.idToken,
            +response.expiresIn
          );
        })
      );
  }

  private authencateUser(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const tokenExpirationDate = new Date().getTime() + expiresIn * 1000;
    const userData = new User(
      email,
      userId,
      token,
      new Date(tokenExpirationDate)
    );
    localStorage.setItem('userData', JSON.stringify(userData));
    this.user.next(userData);
    const expirationDuration =
      new Date(expiresIn).getTime() - new Date().getTime();
    // console.log(expirationDuration);

    // this.autoSignOUt(expirationDuration);
  }

  autoSignIn() {
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (!userData) {
      return;
    }
    const loggedInUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (loggedInUser['_token']) {
      this.user.next(loggedInUser);
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      // this.autoSignOUt(expirationDuration);
    }
  }

  signOut() {
    this.user.next(null);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoSignOUt(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.signOut();
    }, expirationDuration);
  }

  googleSignIn(token) {
    return this.http
      .post<any>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=${config.API_KEY}`,
        {
          postBody: `idToken=${token}&providerId=google.com`,
          requestUri: 'http://localhost:4200',
          returnSecureToken: true,
          returnIdpCredential: true,
        }
      )
      .pipe(
        catchError((error) => {
          return this.errorService.handelError(error);
        }),
        tap((response) => {
          this.authencateUser(
            response.email,
            response.localId,
            response.idToken,
            +response.expiresIn
          );
        })
      );
  }
}
