import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-admin-ops',
  templateUrl: './admin-ops.component.html',
  styleUrls: ['./admin-ops.component.css']
})
export class AdminOpsComponent implements OnInit {

  constructor(private service: ApiService) { }
  currentDay=[{}]
  ngOnInit(): void {
    // this.service.getBookings().subscribe(
    //   res => res.filter(item => {
    //     item.currentStatus === true && item.
    //   })
    // )
    console.log(this.currentDate());
    
  }
  data={
    "id": "b3",
    "uId": "virat@gmail.com",
    "rId": "r2",
"currentStatus": false,
    "bookedDays": 1,
    "bookedFrom": "2021-05-06",
    "bookedTo": "2021-05-06",
    "costPerDay": 600
}
currentDate() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var currDay='';
        var cDay='';
        var cMonth='';
  
        var yyyy = today.getFullYear();
        if (dd < 10) {
          cDay = '0' + dd;
        }
        else{
          cDay = dd.toString();
        }
        if (mm < 10) {
          cMonth = '0' + mm;
        }
        var currDay = yyyy +'-'+ cMonth  + '-' + cDay;
        return currDay;
}
posting(){
  // this.service.getBookings().subscribe(
  //   data=>{

  //   }
  // )
  this.service.addBooking(this.data).then(
    res=>console.log(res)
  )
}

}
