import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu-itemadmin',
  templateUrl: './menu-itemadmin.component.html',
  styleUrls: ['./menu-itemadmin.component.css']
})
export class MenuItemadminComponent {

  menuItems: any[] = [];
  categories: any[] = [
    {
      "categoryName": "Starters",
      "menuItems": [
        {
          "itemName": "Spring Rolls",
          "itemPrice": 200,
          "description": "Crispy spring rolls with a variety of fillings",
          "imageUrl": "https://yaluyalu.lk/cdn/shop/products/kottu_82c8c193-56fb-4074-9414-6cf6520e077b.png?v=1679906619"
        },
        {
          "itemName": "Garlic Bread",
          "itemPrice": 150,
          "description": "Garlic-flavored bread with cheese topping",
          "imageUrl": "https://yaluyalu.lk/cdn/shop/products/kottu_82c8c193-56fb-4074-9414-6cf6520e077b.png?v=1679906619"
        }
      ]
    },
    {
      "categoryName": "Main Course",
      "menuItems": [
        {
          "itemName": "Grilled Chicken",
          "itemPrice": 400,
          "description": "Grilled chicken served with sides",
          "imageUrl": "https://yaluyalu.lk/cdn/shop/products/kottu_82c8c193-56fb-4074-9414-6cf6520e077b.png?v=1679906619"
        },
        {
          "itemName": "Pasta",
          "itemPrice": 350,
          "description": "Pasta with a creamy sauce",
          "imageUrl": "https://yaluyalu.lk/cdn/shop/products/kottu_82c8c193-56fb-4074-9414-6cf6520e077b.png?v=1679906619"
        }
      ]
    }
  ]
  ; // Holds the response grouped by category

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    // Fetch all menu items categorized by category
    this.menuService.getAllMenuItems().subscribe(
      (data: any[]) => {
        //this.categories = data;  // Store the categories and items
      },
      (error) => {
        console.error('Error fetching menu items', error);
      }
    );
  }
}
