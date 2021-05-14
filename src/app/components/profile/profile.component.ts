import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { ApiService } from 'src/app/services/api.service';
import { User } from '../../commonClasses/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  data= new User();
  constructor(private service: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.service.getUser("james@gmail.com").subscribe(
      (data) => {
        this.data=data;
      },
      (error) => {
        console.log('exception occured');
      }
    );
  }

}
