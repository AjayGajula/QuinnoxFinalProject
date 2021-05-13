import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/commonClasses/user';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user = new User();
  msg = '';
  constructor(private service: ApiService, private router: Router) {}

  ngOnInit(): void {}

  registerUser() {
    this.user.id=this.user.email;
    this.service.getUser(this.user.id).subscribe(
      data => {
        if(data != null){
          this.msg = "User Already exists. Please Login";
        }
        else{
          this.service.createUser(this.user).then(
            (postData) => {
              console.log(postData);
              this.msg = '';
              this.router.navigate(['/login']);
            },
            (error) => {
              console.log('exception occured');
              this.msg = error.error;
            }
          );
        }
      }
    );
  }
}
