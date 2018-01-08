import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_service/authentication.service';

@Component({
  selector: 'econth-sidebar',
  templateUrl: './econth-sidebar.component.html',
  styleUrls: ['./econth-sidebar.component.css']
})
export class EconthSidebarComponent implements OnInit {

  public open: boolean = this.open==true ? true : false;
  public open1:boolean = this.open==true ? true : false;

  constructor( private authenticationService:AuthenticationService) { }

  ngOnInit() {
  }

  logout(){
    this.authenticationService.logout();
  }

  toggleCustomerDropdown(){
    this.open=!this.open;
    if(this.open1==true){
      this.open1=!this.open1;
    }
  }

  toggleEmployeeDropdown(){
    if(this.open==true){
      this.open=!this.open;
    }
    this.open1=!this.open1;

  }

}
