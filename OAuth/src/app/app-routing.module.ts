import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { AuthGuard } from './components/auth/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeComponent } from './components/employee/employee.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth',pathMatch: 'full'},
  { path: 'auth', component: AuthComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full',canActivate:[AuthGuard] },
  { path: 'employee', component: EmployeeComponent, pathMatch: 'full',canActivate:[AuthGuard] },
  { path: '**', redirectTo: 'auth' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
