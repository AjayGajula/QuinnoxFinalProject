import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingCardComponent } from './components/booking/booking.component';
import { AboutComponent } from './components/about/about.component';
import { AddMoneyToWalletComponent } from './components/add-money-to-wallet/add-money.component';
import { CheckoutPanelComponent } from './components/checkout-panel/checkout.component';
import { UserBookingComponent } from './components/my-booking-component/my-booking.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RoomAvailabeComponent } from './components/room-available/room-available.component';

import { AadharverifyComponent } from './components/aadhar/aadharverification.component';
import { HomeComponent } from './components/home-component/home.component';
import { LoginComponent } from './components/login-component/login.component';
import { OtpverifyComponent } from './components/otpverification-component/otpverification.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ChangePswdComponent } from './components/change-password-component/change-password.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'aadharverification', component: AadharverifyComponent },
  { path: 'otpverification', component: OtpverifyComponent },
  { path: 'myBooking', component: UserBookingComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'addMoney', component: AddMoneyToWalletComponent },
  { path: 'roomCheck', component: RoomAvailabeComponent },
  { path: 'checkout', component: CheckoutPanelComponent },
  { path: 'booking', component: BookingCardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'changePassword', component: ChangePswdComponent },
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
  AadharverifyComponent,
  OtpverifyComponent,
  UserBookingComponent,
  ProfileComponent,
  AddMoneyToWalletComponent,
  RoomAvailabeComponent,
  CheckoutPanelComponent,
  BookingCardComponent,
  AboutComponent,
  ChangePswdComponent
];
