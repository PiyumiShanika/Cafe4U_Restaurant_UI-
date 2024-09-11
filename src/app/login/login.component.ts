import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Service to handle authentication
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  data!: any;

  login() {
    if (this.authService.login(this.data)) {
      this.router.navigate(['/dashboard']); 
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'There was an error when login. Please try again.',
        confirmButtonText: 'OK'
      });
    }
  }
}
