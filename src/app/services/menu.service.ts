import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = 'http://localhost:8080/api/menu'; // Update with the correct backend URL

  constructor(private http: HttpClient) {}

  // Method to send menu data to the backend
  addMenuItem(menuData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/item`, menuData);
  }

  // Method to get all menu items from the backend
  getAllMenuItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/categories`);
  }
}
