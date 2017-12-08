import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../_service/employee.service';

@Component({
  selector: 'econth-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {

  model:any={};
  showAlertMessage="true";
  employees:any;

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees(){
    this.employeeService.getAllEmployees()
        .subscribe(
          data=>{
            this.employees=data;
          },
          error=>{
            alert("Unable to retrieve employees");
          });
  }

  searchEmployee(){
    this.employeeService.getById(this.model.id)
        .subscribe(
          data=>{

          },
          error=>{

          });
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.model)
        .subscribe(
          data=>{

          },
          error=>{
            
          });
  }

  deleteEmployee(){
    this.employeeService.deleteEmployee(this.model.id)
        .subscribe(
          data=>{

          },
          error=>{
            
          });
  }

}
