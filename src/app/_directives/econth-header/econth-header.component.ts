import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_service/authentication.service';

@Component({
  selector: 'econth-header',
  templateUrl: './econth-header.component.html',
  styleUrls: ['./econth-header.component.css']
})
export class EconthHeaderComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit() {  }

  logout(){
    this.authenticationService.logout();
  }

}
