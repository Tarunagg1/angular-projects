import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor() {}

  handelError(err: HttpErrorResponse) {
    if (!err.error || !err.error.error) {
      return throwError('UNKNOWN ERROR');
    } else {
      return throwError(err.error.error.message);
    }
  }

  errorMsg = {
    EMAIL_EXISTS: 'This email is already not exists',
  };
}
