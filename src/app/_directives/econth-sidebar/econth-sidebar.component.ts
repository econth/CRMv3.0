import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_service/authentication.service';

@Component({
  selector: 'econth-sidebar',
  templateUrl: './econth-sidebar.component.html',
  styleUrls: ['./econth-sidebar.component.css']
})
export class EconthSidebarComponent implements OnInit {

  constructor( private authenticationService:AuthenticationService) { }

  ngOnInit() {
  }

  logout(){
    this.authenticationService.logout();
  }

}
