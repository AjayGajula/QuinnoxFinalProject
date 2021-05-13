import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/commonClasses/user';
import { ApiService } from 'src/app/services/api.service';
import { AppComponent } from '../../app.component';

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
  constructor(private service: ApiService, private router: Router, private loginStatus: AppComponent) {}

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
    this.admin.id=this.admin.email;
    console.log(this.admin);
    
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
