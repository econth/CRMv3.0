import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'econth-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  date: Date = new Date();
  
  datepickerOpts = {
    startDate   : new Date(),
    endDate     : new Date(2018, 0, 1),
    todayBtn: 'linked',
    todayHighlight: true,
    format: 'dd/mm/yyyy',
    icon: 'fa fa-calendar',
    autoclose:true,
    daysOfWeekDisabled:"0,6"
};

timepickerOpts={
  icon: 'fa fa-clock-o', 
  template:'dropdown',
  icons:{
    up: 'fa fa-chevron-up',
    down: 'fa fa-chevron-down'
}

};

}
