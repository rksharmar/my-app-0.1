import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {Home1Component} from './home1/home1.component';


const appRoutes: Routes = [
  
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home1',
    component: Home1Component
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '**',
    component: LoginComponent
  }
  
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }
