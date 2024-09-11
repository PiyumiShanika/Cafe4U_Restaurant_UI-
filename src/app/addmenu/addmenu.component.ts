import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuService } from '../services/menu.service';
import Swal from 'sweetalert2';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css']
})
export class AddmenuComponent implements OnInit {
  menuForm!: FormGroup;

  constructor(private fb: FormBuilder, private menuService: MenuService, private router: Router) {}

  ngOnInit(): void {
    this.menuForm = this.fb.group({
      itemName: ['', Validators.required],
      itemPrice: ['', Validators.required],
      description: ['', Validators.required],
      categoryName: ['', Validators.required],
      imageUrl: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.menuForm.valid) {
      // Send the form data to the backend via the service
      this.menuService.addMenuItem(this.menuForm.value).subscribe(
        (response: any) => {
          console.log('Menu item added successfully', response);
          Swal.fire({
            icon: 'success',
            title: 'Reservation Submitted!',
            text: 'Menu Item has been successfully Added.',
            confirmButtonText: 'OK'
          });
          this.router.navigate(['/dashboard/menuitems']); 
        },
        (error: any) => {
          console.error('Error adding menu item', error);
          Swal.fire({
            icon: 'error',
            title: 'Submission Failed',
            text: 'There was an error adding the menu item. Please try again.',
            confirmButtonText: 'OK'
          });
        }
      );
    }
  }
}
