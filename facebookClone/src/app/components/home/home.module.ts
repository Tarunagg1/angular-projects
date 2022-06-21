import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MaterialModule } from 'src/app/shared/material.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home.module').then((m) => m.HomeModule), // lazy loading
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, RouterModule.forRoot(routes),
    MaterialModule
  ],
})
export class HomeModule {}
