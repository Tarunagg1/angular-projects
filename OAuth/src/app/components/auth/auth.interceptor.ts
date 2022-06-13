import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, Observable, take } from 'rxjs';
import { DesignutilityService } from 'src/app/service/designutility.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _authSerivice: DesignutilityService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this._authSerivice.user.pipe(
      take(1),
      exhaustMap((user: any) => {
        if (!user) {
          return next.handle(req);
        }

        const modifyReq = req.clone({
          params: new HttpParams().set('auth', user.token),
        });
        return next.handle(req);
      })
    );
  }
}
