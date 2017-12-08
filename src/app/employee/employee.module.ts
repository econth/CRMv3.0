import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { EmployeeRoutes } from './employee.routing';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { InactiveEmployeesComponent } from './inactive-employees/inactive-employees.component';

import { EmployeeService } from './../_service/employee.service';

@NgModule({
    imports:[
        RouterModule.forChild(EmployeeRoutes),
        FormsModule,
        CommonModule
    ],
    declarations:[
        AddEmployeeComponent,
        SearchEmployeeComponent,
        InactiveEmployeesComponent
    ],
    providers:[
        EmployeeService
    ]
})

export class EmployeeModule{}