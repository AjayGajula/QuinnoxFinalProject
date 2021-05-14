import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { DatePipe } from '@angular/common';

import { ApiService } from 'src/app/services/api.service';
import { CommonServiceService } from 'src/app/services/common-service.service'


@Component({
  selector: 'app-room-available',
  templateUrl: './room-available.component.html',
  styleUrls: ['./room-available.component.css']
})
export class RoomAvailabeComponent implements OnInit {
  data: any;
  formData: any;
  // id =new Date().getTime();
  // 
  constructor(private service: ApiService, private commonService: CommonServiceService, private router: Router , public datepipe: DatePipe) { }
  ngOnInit(): void {
    ////data from form
    this.commonService.$shareBookingDetails.subscribe(
      formFromBooking => {
        this.formData = formFromBooking;
        console.log(formFromBooking)
        let latest_date =this.datepipe.transform(formFromBooking.fromDate, 'yyyy-MM-dd');
        console.log(latest_date);
        
      }
    )
    ////data from api
    this.service.checkAvailability().subscribe(
      (data) => {
        this.data = data.filter((item: any) =>{
          item.bookings[0].bookingStatus === false
        let latest_date =this.datepipe.transform(item.bookings[0].bookingFrom, 'yyyy-MM-dd');
        console.log(latest_date);
        }
        )
      },
      (error) => {
        console.log('exception occured' + error);
      }
    );
  }
  addToCart() { }
  bookNow(id: string) {
    alert('clicked ' + id)
    // this.router.navigate(['/checkout'])
  }
}
