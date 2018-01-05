import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../_service/employee.service';

@Component({
  selector: 'econth-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {

  model:any={};
  employees:any=[];

  public pageTitle: string= "Search Employee";
  public showAlertMessage: boolean= false;
  public currentPage:number=1;
  public totalItems:number= 5;
  public maxSize:number=2;
  public itemsPage:number=2;
  public key: string = 'id'; 
  public reverse: boolean = false;
  public itemsPerPage:number=this.itemsPage;
  
  constructor(private employeeService: EmployeeService) { }

  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

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
            alert("Unable to retrieve any employee");
          });
  }

  searchEmployee(){
    this.employeeService.getById(this.model.id)
        .subscribe(
          data=>{

          },
          error=>{
            alert("Unable to retrieve any employee");
            this.showAlertMessage=true;
          });
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.model)
        .subscribe(
          data=>{

          },
          error=>{
            alert("Unable to update the employee");
          });
  }

  softDeleteEmployee(){
    this.employeeService.updateEmployee(this.model.id)
        .subscribe(
          data=>{

          },
          error=>{
            alert("Unable to soft delete the employee");
          });
  }
}
