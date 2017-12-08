import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { CustomerRoutes } from './customer.routing';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { InactiveCustomersComponent } from './inactive-customers/inactive-customers.component';

@NgModule({
    imports:[
        RouterModule.forChild(CustomerRoutes),
        CommonModule,
        FormsModule
    ],
    declarations:[
        AddCustomerComponent,
        SearchCustomerComponent,
        InactiveCustomersComponent
    ]
})

export class CustomerModule{}