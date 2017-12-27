import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';
import { DirectiveModule } from './../_directives/directive.module';

import { CustomerRoutes } from './customer.routing';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { InactiveCustomersComponent } from './inactive-customers/inactive-customers.component';

import { CustomerService } from '../_service/customer.service';

@NgModule({
    imports:[
        RouterModule.forChild(CustomerRoutes),
        CommonModule,
        FormsModule,
        NKDatetimeModule,
        DirectiveModule
    ],
    declarations:[
        AddCustomerComponent,
        SearchCustomerComponent,
        InactiveCustomersComponent
    ],
    providers:[CustomerService]
})

export class CustomerModule{}