import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { AddMoneyComponent } from './components/add-money/add-money.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './components/login/login.component';
import { MyBookingComponent } from './components/my-booking/my-booking.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { RoomAvailabeComponent } from './components/room-available/room-available.component';
import { AadharverificationComponent } from './components/aadharverification/aadharverification.component';
import { OtpverificationComponent } from './components/otpverification/otpverification.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { routingComponents, AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddMoneyComponent,
    CheckoutComponent,
    LoginComponent,
    MyBookingComponent,
    ProfileComponent,
    RegisterComponent,
    RoomAvailabeComponent,
    AadharverificationComponent,
    OtpverificationComponent,
    ResetpasswordComponent,
    AboutComponent,
    routingComponents
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
  providers: [],
  exports: [AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
