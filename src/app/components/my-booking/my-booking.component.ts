import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CommonServiceService } from '../../services/common-service.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.css']
})
export class MyBookingComponent implements OnInit {
  cancelConfirm: boolean = false;
  constructor(
    private service: ApiService,
    private commonService: CommonServiceService,
    private datePipe: DatePipe,
    private router: Router
  ) { }
  msg: string = '';
  data: any;
  room = {
    id: '101',
    bookings: [
      {
        bookingStatus: false
      }
    ]
  };
  userBookings = [];
  ngOnInit(): void {
    this.cancelConfirm = false;
    this.data = this.commonService.user;
    this.service.getBookings().subscribe(res => {
      this.userBookings = res.map(
        item=>{
          let fromDate = this.datePipe.transform(item.bookedFrom, 'yyyy-MM-dd');
          let currDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
          let delStatus=false;
          if(fromDate > currDate){
            delStatus=true;
          }
          item.delStatus=delStatus
          console.log(item);
          
          return item;
        }
      )
    });
  }
  cancelBooking(bookingId) {
    this.cancelConfirm = confirm('are you sure???');
    if (this.cancelConfirm === true) {
      this.service.getBookingById(bookingId).subscribe(res => {
        res.currentStatus = false;
        this.service.cancelUpdateBooking(res).then(
         date=>this.ngOnInit()
        );
        this.room.id = res.rId;
        this.data.wallet=this.data.wallet+(res.bookedDays*res.costPerDay);
        this.service.updateWallet(this.data);
        this.service.cancelUpdateRoom(this.room);
      });
    }
  }
}
