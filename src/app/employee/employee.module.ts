import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EmployeeRoutes } from './employee.routing';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { InactiveEmployeesComponent } from './inactive-employees/inactive-employees.component';

@NgModule({
    imports:[
        RouterModule.forChild(EmployeeRoutes)
    ],
    declarations:[
        AddEmployeeComponent,
        SearchEmployeeComponent,
        InactiveEmployeesComponent
    ]
})

export class EmployeeModule{}