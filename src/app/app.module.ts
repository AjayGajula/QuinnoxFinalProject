import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home-component/home.component';
import { AddMoneyToWalletComponent } from './components/add-money-to-wallet/add-money.component';
import { BookingCardComponent } from './components/booking/booking.component';
import { CheckoutPanelComponent } from './components/checkout-panel/checkout.component';
import { LoginComponent } from './components/login-component/login.component';
import { UserBookingComponent } from './components/my-booking-component/my-booking.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { RoomAvailabeComponent } from './components/room-available/room-available.component';
import { AadharverifyComponent } from './components/aadhar/aadharverification.component';
import { OtpverifyComponent } from './components/otpverification-component/otpverification.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { routingComponents, AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminPanelComponent } from './components/admin-panel/admin-ops.component';
import { DatePipe } from '@angular/common';
import { ChangePswdComponent } from './components/change-password-component/change-password.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddMoneyToWalletComponent,
    AddMoneyToWalletComponent,
    CheckoutPanelComponent,
    LoginComponent,
    UserBookingComponent,
    BookingCardComponent,
    ProfileComponent,
    RegisterComponent,
    RoomAvailabeComponent,
    AadharverifyComponent,
    OtpverifyComponent,
    ResetpasswordComponent,
    AboutComponent,
    routingComponents,
    AdminPanelComponent,
    ChangePswdComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  exports: [AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
