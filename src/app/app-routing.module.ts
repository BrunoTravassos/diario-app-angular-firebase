import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DiariosComponent } from './diarios/diarios.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'login',component: LoginComponent},
  { path: 'signup',component: SignupComponent},
  { path: 'diarios',component: DiariosComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
})
export class AppRoutingModule { }
