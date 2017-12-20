import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../../_service/customer.service';

@Component({
  selector: 'econth-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
})
export class SearchCustomerComponent implements OnInit {

  model:any={};
  customers:any;

  constructor(private customerService:CustomerService) { }

  ngOnInit() {
    this.getAllCustomers();
  }

  getAllCustomers(){
    this.customerService.getAllCustomers()
        .subscribe(
          data=>{
            this.customers=data;
          },
          error=>{
            alert("Unable to retrieve any customer");
          });
  }

  searchCustomer(){
    this.customerService.getById(this.model.id)
        .subscribe(
          data=>{

          },
          error=>{
            alert("Unable to retrieve any customer");
          });
  }

  updateCustomer(){
    this.customerService.updateCustomer(this.model)
        .subscribe(
          data=>{

          },
          error=>{
            alert("Unable to update the customer");
          });
  }

  softDeleteCustomer(){
    this.customerService.updateCustomer(this.model.id)
        .subscribe(
          data=>{

          },
          error=>{
            alert("Unable to soft delete the customer");
          });
  }

}
