import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void { }

  constructor(private authService: AuthService,private toastr: ToastrService,private router:Router) { }

  onSubmit(values: any) {
    const { email, password } = values;

    this.authService.login(email, password)
      .then(credential => {
        this.authService.loadUser();
        this.router.navigate(['/'])
        console.log('add new user')
      })
      .catch((err) => {
        this.toastr.error("Invalie email and password")
        console.log(err);
      })
  }


}
