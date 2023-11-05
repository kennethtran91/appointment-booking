import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainModule } from './main/main.module';
import { HttpClientModule } from '@angular/common/http';
import { ApptListModule } from './appt-list/appt-list.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MainModule,
    HttpClientModule,
    ApptListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
