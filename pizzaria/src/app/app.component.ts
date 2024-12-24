import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cart: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  // Load cart from CartService
  loadCart(): void {
    this.cartService.getCart('user123')  // Use the correct user ID
      .subscribe((data) => {
        this.cart = data.items; // Adjust based on the API response
      }, (error) => {
        console.error('Error loading cart', error);
      });
  }

  // Remove item from the cart
  removeFromCart(pizzaId: string): void {
    this.cartService.removeFromCart('user123', pizzaId)
      .subscribe((updatedCart) => {
        this.cart = updatedCart.items;  // Update cart with the removed item
      }, (error) => {
        console.error('Error removing item from cart', error);
      });
  }
}
