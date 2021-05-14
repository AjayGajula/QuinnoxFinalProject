import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.css']
})
export class MyBookingComponent implements OnInit {
  cancelConfirm:boolean=false;
  constructor(private service: ApiService,  private router: Router) { }
  msg:string='';
  data:any;
  ngOnInit(): void {
    this.cancelConfirm=false;
    this.service.checkBooking().subscribe(
      (data) => {
        this.data=data;
      },
      (error) => {
        console.log('exception occured');
        this.msg = "Error";
      }
    );
  }
  cancelBooking(){
    this.cancelConfirm=confirm("are you sure???")
    if(this.cancelConfirm=== true){
      
    }
  }
}
