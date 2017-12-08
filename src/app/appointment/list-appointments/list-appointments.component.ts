import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../_service/appointment.service';

@Component({
  selector: 'econth-list-appointments',
  templateUrl: './list-appointments.component.html',
  styleUrls: ['./list-appointments.component.css']
})
export class ListAppointmentsComponent implements OnInit {

  appointments:any;

  constructor(private service:AppointmentService) { }

  ngOnInit() {
    this.service.getAllAppointments().subscribe((appointment) => {
      this.appointments = appointment;
      console.log("appointments",this.appointments);
    });
  }

}
