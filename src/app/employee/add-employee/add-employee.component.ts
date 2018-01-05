import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../_service/employee.service';

@Component({
  selector: 'econth-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  pageTitle: string="Employee Registration Form";

  model:any={};
  showAlertMessage:boolean=false;

  constructor(private employeeService: EmployeeService) { }

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


  addEmployee(){
    this.employeeService.createEmployee(this.model)
        .subscribe(
          data=>{
            alert("Employee has been added");
          },
          error=>{
            alert("Unable to add Employee");
            this.showAlertMessage=true;
            
          });      
  }

  reset(){
    this.model={};
  }

  generateUsername(){
    this.employeeService.generateEmployeeID()
    .subscribe(
      data=>{
        alert("Employee has been added");
      },
      error=>{
        this.model.username="Emp_600811";
        
      });   
  }
}
