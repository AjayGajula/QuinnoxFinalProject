import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/commonClasses/user';
import { ApiService } from 'src/app/services/api.service';
import { AppComponent } from '../../app.component';
import { CommonServiceService } from '../../services/common-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = new User();
  admin = new User();
  msg = '';
  msgA='';
  constructor(private service: ApiService, private router: Router, private loginStatus: AppComponent, private commonService: CommonServiceService) {}

  ngOnInit(): void {}

  loginUser() {
    this.user.id=this.user.email;
    this.service.getUser(this.user.id).subscribe(
      data => {
        if(data == null){
          this.msg = "User doesn't exist. Please Register!";
        }
        else if(this.user.password === data.password){
          this.loginStatus.loggedIn=true;
          this.msg = "";
          this.commonService.user=data;          
          this.router.navigate(['/']);
        }
        else{
          this.msg = "Bad Credentials, please enter valid password";
        }
      },
    err => console.log("error occured"+err)
    );
  }
  loginAdmin(){
    this.admin.id=this.admin.email.split('@')[0];
    
    this.service.authAdmin(this.admin).then(
      (res:any) => {
        if(JSON.parse(res) === true){
          this.loginStatus.adminLoggedIn=true;
          this.msgA = ''
          this.router.navigate(['/']);
        }
        else{
          this.msgA = 'You are not an admin!';
        }
      },
      (error) => {
        console.log('exception occured');
        this.msgA = error.error;
      }
    );
  }
}
