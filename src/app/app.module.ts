import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { EmployeeComponent } from './employee/employee.component';
import { CustomerComponent } from './customer/customer.component';
import { EconthHeaderComponent } from './_directives/econth-header/econth-header.component';
import { EconthSidebarComponent } from './_directives/econth-sidebar/econth-sidebar.component';
import { MainComponent } from './main/main.component';

export const ROUTES: Routes=[ {path:  'home'  , component :  MainComponent   ,
                              children: [
                                          { path: 'book-appointment', component: AppointmentComponent }
                                          ]} ,
                              {path:  'login' , component :  LoginComponent  } ,
                              {path:  ''      , redirectTo:  'login',       pathMatch:'full'}
                            ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AppointmentComponent,
    EmployeeComponent,
    CustomerComponent,
    EconthHeaderComponent,
    EconthSidebarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
