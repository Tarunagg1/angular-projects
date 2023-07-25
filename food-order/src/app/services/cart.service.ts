import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shared/models/Food';
import { CartItem } from '../shared/models/Carditem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  private localStorageName = "Cart";

  // constructor() {
  //   this.cart = this.getCartFromLocalStorage();
  // }

  addToCart(food: Food): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if (cartItem) return;

    this.cart.items.push(new CartItem(food));
    this.setCartLocalStorage();
  }

  removeFromCart(foodId: string): void {
    this.cart.items = this.cart.items.filter(item => item.food.id !== foodId);
    this.setCartLocalStorage();
  }


  changeQty(foodId: string, quantity: number): void {
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;

    this.setCartLocalStorage();
  }

  clearCart(): void {
    this.cart = new Cart();
    this.setCartLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  private setCartLocalStorage(): void {
    this.cart.totalPrice = this.cart.items.reduce((previousSum, currentItem) => previousSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items.reduce((previousCount, currentItem) => previousCount + currentItem.quantity, 0);

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem(this.localStorageName, cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem(this.localStorageName);
    console.log(cartJson);

    return cartJson ? JSON.parse(cartJson) as Cart : new Cart();
  }

}
