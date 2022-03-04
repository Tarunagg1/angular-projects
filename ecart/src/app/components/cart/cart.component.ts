import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products:any = [];
  allProducts:any = 0;

  constructor(private _cartService:CartService) { }

  ngOnInit(): void {
    this._cartService.getProductData().subscribe((res) => {
      this.products = res;
      this.allProducts = this._cartService.getTotalAmount();
    });
  }

  removeProduct(product:any){
    this._cartService.removeCartData(product);
  }
  
  removeAllProduct(){
    this._cartService.clearCart();
  }



}
