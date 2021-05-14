import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../commonClasses/booking';
import { User } from '../commonClasses/user';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor() { }
  booking=new Booking();
  storeBooking(bData:Booking){
    this.booking=bData;
  }
  user=new User();
  storeUser(uData:User){
    this.user=uData;
  }
}
