import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidelistComponent } from './sidelist/sidelist.component';
import { PasswordListComponent } from './password-list/password-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'site-list', component: SidelistComponent },
  { path: 'password-list', component: PasswordListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
