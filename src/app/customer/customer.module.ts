import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CustomerRoutes } from './customer.routing';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { InactiveCustomersComponent } from './inactive-customers/inactive-customers.component';

@NgModule({
    imports:[
        RouterModule.forChild(CustomerRoutes)
    ],
    declarations:[
        AddCustomerComponent,
        SearchCustomerComponent,
        InactiveCustomersComponent
    ]
})

export class CustomerModule{}