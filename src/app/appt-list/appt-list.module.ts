import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

import {
  MatToolbarModule
} from '@angular/material/toolbar';

import {ApptListComponent} from './appt-list.component'
@NgModule({
  declarations: [ApptListComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class ApptListModule { }
