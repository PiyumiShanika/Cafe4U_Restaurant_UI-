import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://localhost:8080/api/reservations'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  addReservation(reservation: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, reservation);
  }

  getReservations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
