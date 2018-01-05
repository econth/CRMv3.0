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
  
  public pageTitle: string= "Search Customer";
  public showAlertMessage: boolean= false;
  public currentPage:number=1;
  public totalItems:number= 100;
  public maxSize:number=3;
  public itemsPage:number=8;
  public key: string = 'id'; 
  public reverse: boolean = false;
  public itemsPerPage:number=this.itemsPage;


  constructor(private customerService:CustomerService) { 
   
  }

  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  ngOnInit() {
    this.getAllCustomers();
  }

  getAllCustomers(){
    this.customerService.getAllCustomers()
        .subscribe(
          data=>{
            this.customers=data;
            this.totalItems=this.customers.length;
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
            this.showAlertMessage=true;
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
    
  };


}
