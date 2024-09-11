import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-orderview',
  templateUrl: './orderview.component.html',
  styleUrls: ['./orderview.component.css']
})
export class OrderviewComponent implements OnInit {
  reservations: any[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.fetchReservations();
  }

  fetchReservations() {
    this.reservationService.getReservations().subscribe(
      (data) => {
        this.reservations = data;
      },
      (error) => {
        console.error('Error fetching reservations', error);
      }
    );
  }

  confirmReservation(id: number) {
    console.log('Reservation confirmed with ID:', id);
  }
}
