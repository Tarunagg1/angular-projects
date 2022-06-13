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
  user = new BehaviorSubject<User | null>(null);

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
    this.user.next(userData);
  }
}
