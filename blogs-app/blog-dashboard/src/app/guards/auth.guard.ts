import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';



@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(public authService: AuthService, public router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | UrlTree | boolean {
    // if (this.authService.isLoggedIn !== true) {
    //   window.alert('Access Denied, Login is Required to Access This Page!');
    // }
    if (this.authService.isLoggedInGuard) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
