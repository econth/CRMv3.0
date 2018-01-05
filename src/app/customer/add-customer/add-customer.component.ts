import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../../_service/customer.service';

@Component({
  selector: 'econth-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  pageTitle: string="Customer Registration Form";
  
  model:any={};
  showAlertMessage:boolean=false;
  
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  datepickerOpts = {
    startDate   : new Date(1800,0,1),
    endDate     : new Date(),
    todayBtn: 'linked',
    todayHighlight: true,
    format: 'dd/mm/yyyy',
    icon: 'fa fa-calendar',
    autoclose:true
  };

  addCustomer(){
    this.customerService.createCustomer(this.model)
        .subscribe(
          data=>{
            alert("1 Customer has been added");
          },
          error=>{
            alert("Unable to add Customer");
            this.showAlertMessage=true;
          });      
  }

  reset(){
    this.model={};
  }

}
