import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../_service/employee.service';

@Component({
  selector: 'econth-inactive-employees',
  templateUrl: './inactive-employees.component.html',
  styleUrls: ['./inactive-employees.component.css']
})
export class InactiveEmployeesComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  model:any={};

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
