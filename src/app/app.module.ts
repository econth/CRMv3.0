import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppRoutes } from './app.routing'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { EconthHeaderComponent } from './_directives/econth-header/econth-header.component';
import { EconthSidebarComponent } from './_directives/econth-sidebar/econth-sidebar.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { LoginComponent } from './login/login.component';
// import { ListAppointmentsComponent } from './appointment/list-appointments.component';
// import { AddEmployeeComponent } from './employee/add-employee.component';
// import { AddCustomerComponent } from './customer/add-customer.component';
// import { EconthHeaderComponent } from './_directives/econth-header/econth-header.component';
// import { EconthSidebarComponent } from './_directives/econth-sidebar/econth-sidebar.component';
// import { MainComponent } from './main/main.component';
// import { BookAppointmentComponent } from './appointment/book-appointment.component';
// import { SearchCustomerComponent } from './customer/search-customer.component';
// import { InactiveCustomersComponent } from './customer/inactive-customers.component';
// import { InactiveEmployeesComponent } from './employee/inactive-employees.component';
// import { SearchEmployeeComponent } from './employee/search-employee.component';
// import { AccountsComponent } from './accounts/accounts.component';
// import { ReportsComponent } from './reports/reports.component';
// import { InvoicesComponent } from './invoices/invoices.component';

// export const ROUTES: Routes = [{
//   path: 'home', component: MainComponent,
//   children: [
//         { path: 'dashboard',component:DashboardComponent},
//         { path: 'book-appointment', component: BookAppointmentComponent },
//         { path: 'appointments', component: ListAppointmentsComponent },
//         { path: 'add-employee', component: AddEmployeeComponent },
//         { path: 'search-employee', component: SearchEmployeeComponent },
//         { path: 'inactive-employees', component: InactiveEmployeesComponent },
//         { path: 'add-customer', component: AddCustomerComponent },
//         { path: 'search-customer', component: SearchCustomerComponent },
//         { path: 'inactive-customers', component: InactiveCustomersComponent },
//         { path: 'accounts',component:AccountsComponent},
//         { path: 'invoices',component:InvoicesComponent},
//         { path: 'reports',component:ReportsComponent},
//         { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
//       ]
//     },
//   { path: 'login', component: LoginComponent },
//   { path: '', redirectTo: 'login', pathMatch: 'full' }
// ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    EconthHeaderComponent,
    EconthSidebarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
