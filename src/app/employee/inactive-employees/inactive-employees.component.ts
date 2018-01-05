import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../_service/employee.service';

@Component({
  selector: 'econth-inactive-employees',
  templateUrl: './inactive-employees.component.html',
  styleUrls: ['./inactive-employees.component.css']
})
export class InactiveEmployeesComponent implements OnInit {


  public currentPage:number=1;
  public totalItems:number= 1;
  public maxSize:number=3;
  public itemsPage:number=1;
  public key: string = 'id'; 
  public reverse: boolean = false;
  public itemsPerPage:number=this.itemsPage;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  model:any={};

  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  makeAsActiveEmployee(){
    this.employeeService.updateEmployee(this.model)
        .subscribe(
          data=>{
            
          },
          error=>{
            alert("Unable to update the employee");
    });
  }

  deleteEmployee(){
    this.employeeService.deleteEmployee(this.model.id)
        .subscribe(
          data=>{
            
          },
          error=>{
            alert("Unable to delete the employee");
    });
  }
}
