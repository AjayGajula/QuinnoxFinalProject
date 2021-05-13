import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddMoneyComponent } from './components/add-money/add-money.component';
import { BookingComponent } from './components/booking/booking.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './components/login/login.component';
import { MyBookingComponent } from './components/my-booking/my-booking.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { RoomAvailableComponent } from './components/room-available/room-available.component';
import { AadharverificationComponent } from './components/aadharverification/aadharverification.component';
import { OtpverificationComponent } from './components/otpverification/otpverification.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AddMoneyComponent,
    BookingComponent,
    CheckoutComponent,
    LoginComponent,
    MyBookingComponent,
    ProfileComponent,
    RegisterComponent,
    RoomAvailableComponent,
    AadharverificationComponent,
    OtpverificationComponent,
    ResetpasswordComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
