import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../_service/appointment.service';

@Component({
  selector: 'econth-list-appointments',
  templateUrl: './list-appointments.component.html',
  styleUrls: ['./list-appointments.component.css'],
  providers:[AppointmentService]
})
export class ListAppointmentsComponent implements OnInit {

  appointments:any=[];

  public currentPage:number=1;
  public totalItems:number= 3;
  public maxSize:number=2;
  public itemsPage:number=1;
  public key: string = 'id'; 
  public reverse: boolean = false;
  public itemsPerPage:number=this.itemsPage;


  constructor(private service:AppointmentService) { }

  ngOnInit() {
    this.service.getAllAppointments().subscribe((appointment) => {
      this.appointments = appointment;
      console.log("appointments",this.appointments);
    });
  }

  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

}
