import { Routes } from '@angular/router';

import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { ListAppointmentsComponent } from './list-appointments/list-appointments.component';

export const AppointmentRoutes:Routes=[
    {
        path:'',
        children:[{
            path:'book-appointment',
            component:BookAppointmentComponent
        },{
            path:'list-appointments',
            component:ListAppointmentsComponent
        }]
    }
];

