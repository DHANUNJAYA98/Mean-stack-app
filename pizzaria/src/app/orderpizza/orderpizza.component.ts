import { Component, OnInit } from '@angular/core';
import { PizzaService } from 'src/app/services/pizza.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-orderpizza',
  templateUrl: './orderpizza.component.html',
  styleUrls: ['./orderpizza.component.css']
})
export class OrderPizzaComponent implements OnInit {
  pizzas: any[] = [];
  userId: string = 'user123';  // Replace with dynamic user ID

  constructor(
    private pizzaService: PizzaService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.loadPizzas();
    this.getCart();
  }
  
  loadPizzas() {
    this.pizzaService.getPizzas().subscribe({
      next: (data) => {
        // Add a default quantity of 1 for each pizza
        this.pizzas = data.map((pizza: any) => ({ ...pizza, quantity: 1 }));
      },
      error: (err) => {
        console.error('Error fetching pizzas:', err);
      }
    });
  }

  getCart() {
    this.cartService.getCart(this.userId).subscribe({
      next: (cart) => {
        console.log('Cart data:', cart);
        this.pizzas.forEach((pizza) => {
          const cartItem = cart.items.find((item: any) => item.pizzaId._id === pizza._id);
          if (cartItem) {
            pizza.quantity = cartItem.quantity;
          }
        });
      },
      error: (err) => {
        console.error('Error fetching cart:', err);
      }
    });
  }

  incrementQuantity(pizza: any) {
    pizza.quantity++;
  }

  decrementQuantity(pizza: any) {
    if (pizza.quantity > 1) {
      pizza.quantity--;
    }
  }

  addToCart(pizza: any) {
    const quantity = pizza.quantity;
    this.cartService.addToCart(this.userId, pizza._id, quantity).subscribe({
      next: (updatedCart) => {
        console.log('Cart updated successfully:', updatedCart);
        alert('Pizza added to cart!');
        this.getCart(); // Refresh cart after adding
      },
      error: (err) => {
        console.error('Error adding pizza to cart:', err);
        alert('Failed to add pizza to cart.');
      }
    });
  }

  removeFromCart(pizza: any) {
    this.cartService.removeFromCart(this.userId, pizza._id).subscribe({
      next: (updatedCart) => {
        console.log('Cart updated after removal:', updatedCart);
        alert('Pizza removed from cart!');
        this.getCart(); // Refresh cart after removing
      },
      error: (err) => {
        console.error('Error removing pizza from cart:', err);
        alert('Failed to remove pizza from cart.');
      }
    });
  }
}
