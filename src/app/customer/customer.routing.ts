import { Routes } from '@angular/router';

import { AddCustomerComponent } from './add-customer/add-customer.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { InactiveCustomersComponent } from './inactive-customers/inactive-customers.component';

export const CustomerRoutes:Routes=[
    {
        path:'',
        children:[{
            path:'add-customer',
            component:AddCustomerComponent
        },{
            path:'search-customer',
            component:SearchCustomerComponent
        },{
            path:'inactive-customers',
            component:InactiveCustomersComponent
        }]
    }
];