import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
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
  constructor(private service: ApiService, private commonService: CommonServiceService, private router: Router) { }
  ngOnInit(): void {
    ////data from form
    this.commonService.$shareBookingDetails.subscribe(
      formFromBooking => this.formData = formFromBooking
    )
    ////data from api
    this.service.checkAvailability().subscribe(
      (data) => {
        this.data = data.filter((item: any) =>
          item.bookings[0].bookingStatus === false 
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
