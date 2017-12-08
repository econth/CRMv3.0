import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppointmentRoutes } from './appointment.routing';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { ListAppointmentsComponent } from './list-appointments/list-appointments.component';

@NgModule({
    imports:[
        RouterModule.forChild(AppointmentRoutes),
        CommonModule
    ],
    declarations:[
        BookAppointmentComponent,
        ListAppointmentsComponent
    ]
})


export class AppointmentModule{}