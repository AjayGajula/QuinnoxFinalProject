import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { ApiService } from 'src/app/services/api.service';
import { CommonServiceService } from 'src/app/services/common-service.service'

@Component({
  selector: 'app-room-available',
  templateUrl: './room-available.component.html',
  styleUrls: ['./room-available.component.css']
})
export class RoomAvailabeComponent implements OnInit {
  data:any;
  formData:any;
  constructor(private service: ApiService,private commonService: CommonServiceService, private router: Router) {}
  ngOnInit(): void {
    this.data={
      roomType:'',
      capacity:'',
      cost:''
    }
    this.service.checkAvailability().subscribe(//pass userId
      (data) => {
        this.data=data[0];
      },
      (error) => {
        console.log('exception occured');
      }
    );
    ///////////////////////////////////
    this.commonService.$shareBookingDetails.subscribe(
        data => this.formData=data
      )



  }
  addToCart(){
    alert('clicked')
  }
  proceedBooking(){
    this.router.navigate(['/checkout'])
    
  }
}
