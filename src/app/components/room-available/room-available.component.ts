import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { DatePipe } from '@angular/common';

import { ApiService } from 'src/app/services/api.service';
import { CommonServiceService } from 'src/app/services/common-service.service'
import { Booking } from 'src/app/commonClasses/booking';
import { isTemplateSpan } from 'typescript';


@Component({
  selector: 'app-room-available',
  templateUrl: './room-available.component.html',
  styleUrls: ['./room-available.component.css']
})
export class RoomAvailabeComponent implements OnInit {
  data: any;
  formData: any;
  fromDataForm: any;
  booking = new Booking();

  // id =new Date().getTime();
  // 
  constructor(private service: ApiService, private commonService: CommonServiceService, private router: Router, public datepipe: DatePipe) { }
  ngOnInit(): void {

    let fromDataForm = this.datepipe.transform(this.commonService.booking.fromDate, 'dd/MM/yyyy');
    let toDataForm = this.datepipe.transform(this.commonService.booking.toDate, 'dd/MM/yyyy');
    console.log(fromDataForm)
    console.log(toDataForm);
    console.log(this.commonService.booking.room);


    // ////data from api
    this.service.checkAvailability().subscribe(
      (data) => {
        this.data = data.filter(
          (item: any) => {
            if(item.bookings[0].bookingStatus === true){
              return item;
            }
            return item.bookings[0].bookingStatus === false && item.roomType == this.commonService.booking.room
          }
        )
      },
      (error) => {
        console.log('exception occured' + error);
      }
    );
  }
  bookNow(id: string) {
    alert('clicked ' + id)
    // this.router.navigate(['/checkout'])
  }
}
