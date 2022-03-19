import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { Cartitem } from 'src/app/shared/models/Cartitems';
import { Food } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();

  addToCart(food: Food): void {
    let cartItem = this.cart.items.find((item) => item.food.id === food.id);
    if (cartItem) {
      this.changeQty(food.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new Cartitem(food));
  }

  removeFromCart(id: any): void {
    console.log(id);
    this.cart.items = this.cart.items.filter((item) => item.food.id !== id);
    console.log(this.cart.items);
    
  }

  changeQty(id: any, quantity: number): void {
    let cartItem = this.cart.items.find((item) => item.food.id === id);
    if (!cartItem) {
      return;
    }
    cartItem.quantity = quantity;
  }

  getCart(): Cart {
    return this.cart;
  }
}
