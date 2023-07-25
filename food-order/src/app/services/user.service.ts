import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../shared/models/User';
import { IUserLogin } from '../shared/interfaces/IUserlogin';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(this.getFromLocalStorage());
  public userObservable: Observable<User>;
  private USERKEY = "user";

  constructor(private httpClient: HttpClient, private toastrService: ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }

  login(userLogin: IUserLogin): Observable<User> {
    return this.httpClient.post<User>("https://staging-api.didfi.tech/api/v1/auth/consumer/login", userLogin)
      .pipe(tap({
        next: (user) => {
          this.setToUserLocalStorage(user)
          this.toastrService.success("Welcome to food corner");
        },
        error: (err) => {
          console.log(err);
          this.toastrService.error(err.error.error.message, "Login Filed");
        },
      }));

  }

  private setToUserLocalStorage(user:User){
    localStorage.setItem(this.USERKEY,JSON.stringify(user))
  }

  private getFromLocalStorage():User{
    const data = localStorage.getItem(this.USERKEY);
    if(data){
      return JSON.parse(data) as User;
    }
    return new User();
  }
}
