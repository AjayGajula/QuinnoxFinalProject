import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AadharverificationComponent } from './components/aadharverification/aadharverification.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OtpverificationComponent } from './components/otpverification/otpverification.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'aadharverification', component: AadharverificationComponent },
  { path: 'otpverification', component: OtpverificationComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [RegisterComponent, LoginComponent];
