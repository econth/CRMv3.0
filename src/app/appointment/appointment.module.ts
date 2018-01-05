import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { PipeModule } from './../_pipe/pipe.module';
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';
import { DirectiveModule } from './../_directives/directive.module';

import { AppointmentRoutes } from './appointment.routing';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { ListAppointmentsComponent } from './list-appointments/list-appointments.component';

@NgModule({
    imports:[
        RouterModule.forChild(AppointmentRoutes),
        CommonModule,
        PipeModule,
        FormsModule,
        NKDatetimeModule,
        DirectiveModule,
        OrderModule
    ],
    declarations:[
        BookAppointmentComponent,
        ListAppointmentsComponent
    ]
})

export class AppointmentModule{}