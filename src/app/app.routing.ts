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
        path: 'appointment',
        loadChildren: './appointment/appointment.module#AppointmentModule'
    },{
        path: 'employee',
        loadChildren: './employee/employee.module#EmployeeModule'
    },{
        path: 'customer',
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