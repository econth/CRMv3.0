import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../_service/employee.service';

@Component({
  selector: 'econth-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  model:any={};
  showAlertMessage=false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    
  }

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


  

}
