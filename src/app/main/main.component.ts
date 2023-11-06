import { Component } from '@angular/core';
import {
	NgbCalendar,
	NgbDateAdapter,
	NgbDateParserFormatter,
	NgbDatepickerModule,
	NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';

import { DatePipe } from '@angular/common';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [DatePipe], // Add DatePipe to providers
})
export class MainComponent {
  public successMsg: string;
  public errorMsg: string;

  currentDate = new Date();
  date: { year: number; month: number; } | undefined;
  model: NgbDateStruct | undefined;
  time = { hour: 13, minute: 30 };
  name: string;
  services: string;

  matdate: Date | undefined;
  phone: number;

  constructor(private appointmentService: AppointmentService, private datePipe: DatePipe, private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>) {}

	selectToday() {
		this.model = this.ngbCalendar.getToday();
	}

  createAppointment() {
    const year = this.model?.year;
    const month = this.model?.month;
    const day = this.model?.day;
    let formattedDate = month + "/" + day + "/" + year; //ugly but i'm dumb
    let formattedTime = this.time.hour + ":" + this.time.minute;

    this.appointmentService.createAppointment(formattedDate, this.name, this.phone, formattedTime)
      .subscribe((createdAppointment: Appointment) => {
        formattedDate = '';
        this.name = '';
        this.phone;
        formattedTime;
        this.successMsg = `Appointment Booked Successfully for` + this.name + `at` + formattedDate;
      },
      (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
      });
  }
}
