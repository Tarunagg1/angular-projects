import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmited = false;
  returnUrl = '';

  constructor(private fb: FormBuilder, private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    });
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
  }

  get fc() {
    return this.loginForm.controls
  }

  onSubmit() {
    this.isSubmited = false;
    if (this.loginForm.invalid) {
      return;
    }

    const email = this.fc['email'].value;
    const password = this.fc['password'].value;

    console.log(this.fc);
    this.userService.login({ email: email, password:password })
    .subscribe(()=>{
      this.router.navigateByUrl(this.returnUrl)
    })

  }
}
