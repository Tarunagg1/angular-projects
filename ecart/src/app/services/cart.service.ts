import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartDataList: any = [];
  productData = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {}

  getProductData() {
    return this.productData.asObservable();
  }

  setProductData(product: any) {
    return this.cartDataList.push(...product);
    this.productData.next(product);
  }

  addToCart(product: any) {
    this.cartDataList.push(product);
    this.productData.next(this.cartDataList);
    this.getTotalAmount();
  }

  getTotalAmount() {
    let grandTotal = 0;

    this.cartDataList.map((ele: any) => {
      grandTotal += ele.price;
    });

    return grandTotal;
  }

  removeCartData(product: any) {
    this.cartDataList.map((ele: any, index: Number) => {
      if (product.id === ele.id) {
        this.cartDataList.splice(index, 1);
      }
    });
    this.productData.next(this.cartDataList);
  }

  clearCart() {
    this.cartDataList = [];
    this.productData.next(this.cartDataList);
  }
}
