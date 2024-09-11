import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../services/reservation.service'; // Assume this service handles HTTP requests
import Swal from 'sweetalert2';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservationForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private reservationService: ReservationService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.reservationForm = this.fb.group({
      guestName: ['', Validators.required],
      type: ['dinein', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      numberOfPeople: [1, [Validators.required, Validators.min(1)]],
      menuRequest: ['', Validators.maxLength(200)]
    });
  }

  submitReservation(): void {
    if (this.reservationForm.valid) {
      this.reservationService.addReservation(this.reservationForm.value).subscribe(response => {
        // Show success message
        const reservationId = response.id;
        Swal.fire({
          icon: 'success',
          title: 'Reservation Submitted!',
          text: 'Your reservation has been successfully submitted. Your reservation ID is ' + reservationId,
          confirmButtonText: 'OK'
        });

        // reset the form after submission
        this.reservationForm.reset();

      }, error => {
        // Show error message
        Swal.fire({
          icon: 'error',
          title: 'Submission Failed',
          text: 'There was an error submitting your reservation. Please try again.',
          confirmButtonText: 'OK'
        });

        console.error('Error submitting reservation', error);
      });
    }
  }
}
