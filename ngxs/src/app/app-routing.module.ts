import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { GetemployeebyidComponent } from './getemployeebyid/getemployeebyid.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent, pathMatch: 'full' },
  {
    path: 'employee/:id',
    component: GetemployeebyidComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
