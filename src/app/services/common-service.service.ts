import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../commonClasses/booking';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { User } from '../commonClasses/user';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor() { }
  
  $shareBookingDetails = new EventEmitter();
  shareBooking(booking:any){
    this.$shareBookingDetails.emit(booking);
  }
  user=new User();
  storeUser(uData:User){
    this.user=uData;
  }
}
