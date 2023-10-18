import { Component } from '@angular/core';
import {
	NgbCalendar,
	NgbDateAdapter,
	NgbDateParserFormatter,
	NgbDatepickerModule,
	NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  
})
export class MainComponent {
  currentDate = new Date();
  date: { year: number; month: number; } | undefined;
  model: NgbDateStruct | undefined;
  time = { hour: 13, minute: 30 };
  name: string | undefined;
  services: string | undefined;

  phone: number | undefined;
  constructor(private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>) {}

	selectToday() {
		this.model = this.ngbCalendar.getToday();
	}
}
