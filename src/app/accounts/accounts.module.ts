import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AccountsComponent } from "./accounts.component";
import { AccountsRoutes } from "./accounts.routing";

@NgModule({
    imports:[
        RouterModule.forChild(AccountsRoutes)
    ],
    declarations:[AccountsComponent]
})


export class AccountsModule{}