import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';


import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainComponent } from './main.component';
@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    CalendarModule,
    InputTextModule,
    ButtonModule,
    NgbModule,
    NgbAlertModule, 
    JsonPipe,
    NgbDatepickerModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [MainComponent]
})
export class MainModule { }
