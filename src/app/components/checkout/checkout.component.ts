import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { Booking } from 'src/app/commonClasses/booking';
import { BookingPost } from 'src/app/commonClasses/bookingPost';
import { User } from 'src/app/commonClasses/user';
import { ApiService } from 'src/app/services/api.service';
import { CommonServiceService } from 'src/app/services/common-service.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  booking = new Booking();
  bookingData = new BookingPost();
  email: any;
  name: any;
  mobileNum: any;
  totalAmount: any;
  user = new User();
  room = {
    id: '101',
    bookings: [
      {
        bookingStatus: true,
        bookingFrom:null,
        bookingTo:null
      }
    ]
  };
  walletData = {
    id:null,
    wallet:0
  }
  constructor(private router: Router,private commonService: CommonServiceService,private apiService :ApiService) { }

  ngOnInit(): void {
    this.bookingData.id= 'b' + new Date().getTime();
    this.name=this.commonService.user.firstName+" "+this.commonService.user.lastName ;
    this.bookingData.uId=this.commonService.user.email;
    this.bookingData.rId=this.commonService.booking.rId;
    this.bookingData.currentStatus=true;
    this.mobileNum=this.commonService.user.mobileNum;
    this.bookingData.bookedFrom=this.commonService.booking.fromDate;
    this.bookingData.bookedTo=this.commonService.booking.toDate;
    this.bookingData.bookedDays=this.commonService.booking.bookedDays;
    this.bookingData.costPerDay=this.commonService.booking.costPerDay;
    this.totalAmount=this.commonService.booking.bookedDays*this.commonService.booking.costPerDay;
  }
  completeBooking(){
    if(this.commonService.user.wallet > this.totalAmount){
    this.apiService.createBooking(this.bookingData)
    this.room.id=this.commonService.booking.rId
    this.room.bookings[0].bookingFrom=this.commonService.booking.fromDate;
    this.room.bookings[0].bookingTo=this.commonService.booking.toDate;
    this.apiService.cancelUpdateRoom(this.room);
    this.walletData.id=this.commonService.user.email;
    this.walletData.wallet=this.commonService.user.wallet - this.totalAmount;
    this.apiService.updateWallet(this.walletData);
    alert('Booking Successfull with id '+this.bookingData.id);
    this.router.navigate(['/myBooking'])
    }
    else{
    this.router.navigate(['/addMoney'])
    }
  }
  cancelBooking(){
    this.router.navigate(['/book'])
  }
}
