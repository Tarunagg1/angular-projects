import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email: string;
  isLogin$: Observable<boolean>;
  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService){}

  ngOnInit(): void {
    this.email = JSON.parse(localStorage.getItem('user')).email;
    this.isLogin$ = this.authService.isLoggin();
  }

  logout(): void {
    this.authService.logOut();
  }
}
