import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppointmentService{

    constructor(private http: Http){}

    getAllAppointments(){
        return this.http.get('../assets/data/appointments.json')
                   .map((response:Response)=>response.json())
    }

    bookAppointment(){
        
    }
}