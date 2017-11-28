import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

export const AppRoutes : Routes=[{
    path: 'home',
    component: MainComponent,
    children:[{
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },{
        path: 'book-appointment',
        loadChildren: './appointment/appointment.module#AppointmentModule'
    },{
        path: 'list-appointments',
        loadChildren: './appointment/appointment.module#AppointmentModule'
    },{
        path: 'add-employee',
        loadChildren: './employee/employee.module#EmployeeModule'
    },{
        path: 'search-employee',
        loadChildren: './employee/employee.module#EmployeeModule'
    },{
        path: 'inactive-employees',
        loadChildren: './employee/employee.module#EmployeeModule'
    },{
        path: 'add-customer',
        loadChildren: './customer/customer.module#CustomerModule'
    },{
        path: 'search-customer',
        loadChildren: './customer/customer.module#CustomerModule'
    },{
        path: 'inactive-customers',
        loadChildren: './customer/customer.module#CustomerModule'
    },{
        path: 'accounts',
        loadChildren: './accounts/accounts.module#AccountsModule'
    },{
        path: 'invoices',
        loadChildren: './invoices/invoices.module#InvoicesModule'
    },{
        path: 'reports',
        loadChildren: './reports/reports.module#ReportsModule'
    },{
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }]
},{
    path: 'login',
    component: LoginComponent
},{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
}];