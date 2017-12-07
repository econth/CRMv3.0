import { Component,OnInit } from '@angular/core';
import { AuthenticationService } from '../_service/authentication.service';

@Component({
    selector:'econth-dashboard',
    templateUrl:'./dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})





export class DashboardComponent implements OnInit{
    users:any;
    constructor(private service:AuthenticationService){
       
    }

    ngOnInit(){

        this.service.login().subscribe((user) => {
            console.log('product-list received updated products');
            this.users = user;
            console.log("User",this.users);
          });

          
    }

}

