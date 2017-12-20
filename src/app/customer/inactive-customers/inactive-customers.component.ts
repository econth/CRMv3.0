import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../../_service/customer.service';

@Component({
  selector: 'econth-inactive-customers',
  templateUrl: './inactive-customers.component.html',
  styleUrls: ['./inactive-customers.component.css']
})
export class InactiveCustomersComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  model:any={};

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
