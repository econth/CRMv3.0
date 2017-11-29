import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_service/authentication.service';

@Component({
  selector: 'econth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pageTitle:  string = 'Login Page';
  model: any={};
 
  constructor(
    private router:Router,
    private authenticationService:AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.logout();
  }

  login():void{
    if(this.model.username && this.model.password){
      this.authenticationService.login();
    }else{
      alert("unable to login");
    }
  }

}
