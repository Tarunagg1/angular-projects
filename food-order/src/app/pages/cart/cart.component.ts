import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/shared/models/Carditem';
import { Cart } from 'src/app/shared/models/Cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts!: Cart;

  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
        // console.log(cart);
        this.carts = cart;
      })
  }

  ngOnInit(): void { }

  removeCart(cartItem: CartItem): void {
    this.cartService.removeFromCart(cartItem.food.id);
  }

  changeQuantity(cartItem: CartItem, qty: string) {
    const qtny = parseInt(qty);
    this.cartService.changeQty(cartItem.food.id, qtny);
  }
}
