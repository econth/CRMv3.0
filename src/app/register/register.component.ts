import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../_service/user.service';

@Component({
  selector: 'econth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any={};
  
  constructor(
    private router: Router,
    private userService:UserService ) { }

  ngOnInit() {
  }

  register(){
    //this.userService.register()

    this.router.navigate(['/login']);
  }

}
