import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/commonClasses/user';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css'],
})
export class ResetpasswordComponent implements OnInit {
  user = new User();
  otpReceived: any;
  otpData: any;
  emailToSearch:any;
  constructor(private service:ApiService) {}

  ngOnInit(): void {}
  
  checkOtp(){
    // this.service.getUser(email)
    this.service.getOtp(this.otpData).then(
      data => {
        console.log(data);
        this.otpReceived=data
      },
      error => console.log(error)
    );
  }
}
