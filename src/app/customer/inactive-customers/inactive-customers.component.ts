import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../../_service/customer.service';

@Component({
  selector: 'econth-inactive-customers',
  templateUrl: './inactive-customers.component.html',
  styleUrls: ['./inactive-customers.component.css']
})
export class InactiveCustomersComponent implements OnInit {

  public currentPage:number=1;
  public totalItems:number= 1;
  public maxSize:number=3;
  public itemsPage:number=1;
  public key: string = 'id'; 
  public reverse: boolean = false;
  public itemsPerPage:number=this.itemsPage;

  model:any={};

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  makeAsActiveCustomer(){
    this.customerService.updateCustomer(this.model)
        .subscribe(
          data=>{
            
          },
          error=>{
            alert("Unable to update the customer");
    });
  }

  deleteCustomer(){
    this.customerService.deleteCustomer(this.model.id)
        .subscribe(
          data=>{
            
          },
          error=>{
            alert("Unable to delete the customer");
    });
  }

}
