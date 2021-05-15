import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CommonServiceService } from '../../services/common-service.service';

@Component({
  selector: 'app-otpverification',
  templateUrl: './otpverification.component.html',
  styleUrls: ['./otpverification.component.css'],
})
export class OtpverificationComponent implements OnInit {
  msg: string;
  constructor(private service: ApiService, private commonService: CommonServiceService, private router: Router){}
  otpData=
    {
    "aadharNum": "668571035583",
      "account_sid": "ACda4234d33791372d074af266c0dc665e",
      "auth_token": "38988664cc6304675668b5cd1d2796f7",
      "sender": "+16103793727",
      "reciever": "+917019218625",
      "eventtype": "phnumverify"
    }
  
  ngOnInit(): void {
    this.checkOtp()
  }
  otp: any;
  otpReceived: any;
  isValid:boolean;
  
  authComplete(){
    if(this.otpReceived==this.otp){
      this.msg=""
    this.service.createUser(this.commonService.user).then(
      (postData) => {
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log('exception occured');
      }
    );
    }
    else{
      this.msg="Invalid otp enter again"
    }
  }
  checkOtp(){
    this.service.getOtp(this.otpData).then(
      data => {
        console.log(data);
        this.otpReceived=data
      },
      error => console.log(error)
    );
  }

}
