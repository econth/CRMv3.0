import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';

import { InvoicesComponent } from "./invoices.component";
import { InvoicesRoutes } from "./invoices.routing";

@NgModule({
    imports:[
        RouterModule.forChild(InvoicesRoutes),
        CommonModule
    ],
    declarations:[InvoicesComponent]
})


export class InvoicesModule{}