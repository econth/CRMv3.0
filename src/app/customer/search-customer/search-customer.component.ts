import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../../_service/customer.service';

@Component({
  selector: 'econth-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
})
export class SearchCustomerComponent implements OnInit {

  model:any={};
  customers:any=[];
<<<<<<< HEAD
=======

  public currentPage:number = 1;
  public totalItems:number = 10;
  public maxSize:number = 3;
>>>>>>> 81ee04a535478477b1150f8884ae8022f1260c0d

  public currentPage:number;
  public totalItems:number;
  public maxSize:number;

  constructor(private customerService:CustomerService) { 
    this.currentPage;
  }

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
  setPage(pageNo:number):void {
    this.currentPage = pageNo;  
  };

  pageChanged(event:any):void {
    console.log('Number items per page: ' + event.itemsPerPage);
<<<<<<< HEAD
    console.log('Current Page: ' + this.currentPage);
=======
>>>>>>> 81ee04a535478477b1150f8884ae8022f1260c0d
    
  };


}
