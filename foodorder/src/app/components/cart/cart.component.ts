import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart!: Cart;

  constructor(private cartService: CartService) {
    this.setCart();
  }

  ngOnInit(): void {}

  setCart() {
    console.log(this.cartService.getCart());
    this.cart = this.cartService.getCart();
  }

  removeFromCart(id: any): void {
    this.cartService.removeFromCart(id);
    this.setCart();
  }

  changeQuantity(id: any, qty: any): void {
    this.cartService.changeQty(id, qty);
    this.setCart();
  }

  getCart(): Cart {
    return this.cart;
  }
}
