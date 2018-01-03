import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Appointment } from '../_model/appointment';

@Injectable()
export class AppointmentService{

    constructor(private http: Http){}

    createAppointment(appointment: Appointment){
        return this.http.post('',appointment).map((response: Response) => response.json());
    }
    
    getAllAppointments(){
        return this.http.get('../assets/data/appointments.json')
                   .map((response:Response)=>response.json())
    }

    
}