import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:3001/api/cart';  // Your backend URL

  constructor(private http: HttpClient) {}

  // Get cart for a user
  getCart(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${userId}`);
  }

  // Add item to cart
  addToCart(userId: string, pizzaId: string, quantity: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${userId}`, { pizzaId, quantity });
  }

  // Remove item from cart
  removeFromCart(userId: string, pizzaId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${userId}/${pizzaId}`);
  }
  updateQuantity(userId: string, pizzaId: string, quantity: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${userId}/update/${pizzaId}`, { quantity });
  }
  
}
