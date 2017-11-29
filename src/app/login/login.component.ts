import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'econth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pageTitle:  string = 'Login Page';
  model : any={};
 
  constructor() { }

  ngOnInit() {
  }

}
