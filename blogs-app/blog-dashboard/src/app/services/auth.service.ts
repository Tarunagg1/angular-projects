import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, authState,signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedInGuard:boolean = false;

  constructor(private auth: Auth, private router: Router, private toastr: ToastrService) { }

  login(email, password) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loadUser() {
    authState(this.auth).subscribe((user) => {
      // console.log(user);
      this.isLoggedInGuard = true;
      this.loggedIn.next(true)
      localStorage.setItem('user', JSON.stringify(user));
    })
  }

  logOut(){
    signOut(this.auth).then(() => {
      this.loggedIn.next(false);
      this.isLoggedInGuard = false;
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
      this.toastr.info("Logout success");
    }).catch(() => {
      this.toastr.error("Something went wrong")
    })
  }

  isLoggin() {
    return this.loggedIn.asObservable();
  }
}
