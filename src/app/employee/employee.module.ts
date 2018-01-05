import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OrderModule } from 'ngx-order-pipe';
import { PipeModule } from './../_pipe/pipe.module';
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';
import { DirectiveModule } from './../_directives/directive.module';

import { EmployeeRoutes } from './employee.routing';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { InactiveEmployeesComponent } from './inactive-employees/inactive-employees.component';

import { EmployeeService } from './../_service/employee.service';

@NgModule({
    imports:[
        RouterModule.forChild(EmployeeRoutes),
        FormsModule,
        CommonModule,
        PipeModule,
        NKDatetimeModule,
        OrderModule,
        DirectiveModule
        
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