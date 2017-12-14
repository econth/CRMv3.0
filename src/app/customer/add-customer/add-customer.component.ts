import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'econth-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor() { }

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

}
