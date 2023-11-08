import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environments/environment';
import { Appointment } from './appointment.interface';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }
  private BASE_URL = environment.API_URL;

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>('/api/appointments');
  }

  createAppointment(appointmentDate: string, name: string, phone: number, time: string): Observable<Appointment> {
    // console.log({ appointmentDate, time, name, phone, services });
    return this.http.post<Appointment>(`${this.BASE_URL}/api/appointments`, { appointmentDate, time, name, phone });
  }

  cancelAppointment(id: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/appointments/${id}`);
  }
}
