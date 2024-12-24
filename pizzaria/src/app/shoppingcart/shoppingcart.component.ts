import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';  // Import CartService

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  cartItems: any[] = [];  // Array to hold cart items
  userId: string = 'user123';  // Use a dynamic user ID in production
  showCheckout: boolean = false;
  orderConfirmed: boolean = false;  
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();  // Load the cart when the component is initialized
  }

  loadCart() {
    this.cartService.getCart(this.userId).subscribe({
      next: (cartData) => {
        this.cartItems = cartData.items;  // Update the cart items with the response data
      },
      error: (err) => {
        console.error('Error fetching cart data:', err);
      }
    });
  }

  removeFromCart(item: any) {
    this.cartService.removeFromCart(this.userId, item.pizzaId._id).subscribe({
      next: () => {
        this.loadCart();  // Reload cart after removal
      },
      error: (err) => {
        console.error('Error removing item from cart:', err);
      }
    });
  }

  updateQuantity(item: any) {
    // Update the cart with the new quantity
    this.cartService.updateQuantity(this.userId, item.pizzaId._id, item.quantity).subscribe({
      next: () => {
        this.loadCart();  // Reload cart after updating the quantity
      },
      error: (err) => {
        console.error('Error updating quantity:', err);
      }
    });
  }

  get totalAmount() {
    return this.cartItems.reduce((total, item) => total + (item.pizzaId.price * item.quantity), 0);
  }

  getTotalItemsInCart(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }
  proceedToCheckout() {
    this.showCheckout = true;
  }

  confirmOrder() {
    this.orderConfirmed = true;  // Set flag to show confirmation message
    setTimeout(() => {
      alert('Your order will be delivered in 45 minutes!');
    }, 100);
  }
}
