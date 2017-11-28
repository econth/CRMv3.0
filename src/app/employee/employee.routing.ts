import { Routes } from '@angular/router';

import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { InactiveEmployeesComponent } from './inactive-employees/inactive-employees.component';

export const EmployeeRoutes:Routes=[
    {
        path:'',
        children:[{
            path:'add-employee',
            component:AddEmployeeComponent
        },{
            path:'search-employee',
            component:SearchEmployeeComponent
        },{
            path:'inactive-employees',
            component:InactiveEmployeesComponent
        }]
    }
];