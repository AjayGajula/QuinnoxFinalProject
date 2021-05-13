import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './components/booking/booking.component';
import { AadharverificationComponent } from './components/aadharverification/aadharverification.component';
import { AboutComponent } from './components/about/about.component';
import { AddMoneyComponent } from './components/add-money/add-money.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MyBookingComponent } from './components/my-booking/my-booking.component';
import { OtpverificationComponent } from './components/otpverification/otpverification.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { RoomAvailabeComponent } from './components/room-available/room-available.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'aadharverification', component: AadharverificationComponent },
  { path: 'otpverification', component: OtpverificationComponent },
  { path: 'myBooking', component: MyBookingComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'addMoney', component: AddMoneyComponent },
  { path: 'roomCheck', component: RoomAvailabeComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  LoginComponent,
  RegisterComponent,
  HomeComponent,
  ResetpasswordComponent,
  AadharverificationComponent,
  OtpverificationComponent,
  MyBookingComponent,
  ProfileComponent,
  AddMoneyComponent,
  RoomAvailabeComponent,
  CheckoutComponent,
  BookingComponent,
  AboutComponent
];
