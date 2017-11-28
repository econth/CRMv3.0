import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { InvoicesComponent } from "./invoices.component";
import { InvoicesRoutes } from "./invoices.routing";

@NgModule({
    imports:[
        RouterModule.forChild(InvoicesRoutes)
    ],
    declarations:[InvoicesComponent]
})


export class InvoicesModule{}