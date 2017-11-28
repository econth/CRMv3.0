import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ReportsComponent } from "./reports.component";
import { ReportsRoutes } from "./reports.routing";

@NgModule({
    imports:[
        RouterModule.forChild(ReportsRoutes)
    ],
    declarations:[ReportsComponent]
})


export class ReportsModule{}