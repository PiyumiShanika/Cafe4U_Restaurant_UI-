import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.component.html',
  styleUrls: ['./useradd.component.css']
})
export class UseraddComponent {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      fullName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      // Send the form data to the backend via the service
      this.userService.addUser(this.userForm.value).subscribe(
        (response: any) => {
          console.log('User added successfully', response);
          Swal.fire({
            icon: 'success',
            title: 'User Submitted!',
            text: 'User has been successfully Added.',
            confirmButtonText: 'OK'
          });
          this.router.navigate(['/dashboard/userManage']); 
        },
        (error: any) => {
          console.error('Error adding user', error);
          Swal.fire({
            icon: 'error',
            title: 'Submission Failed',
            text: 'There was an error adding the user. Please try again.',
            confirmButtonText: 'OK'
          });
        }
      );
    }
  }
}
