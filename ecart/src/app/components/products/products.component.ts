import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsLists:any;

  constructor(private _apiService:ApiService,private _cartService:CartService) { }

  ngOnInit(): void {
    this._apiService.getProducts().subscribe(res => {
      this.productsLists = res;
      Object.assign(res,{quantity:1,total:res.price})
    })
  }

  addToCart(item:any){  
    this._cartService.addToCart(item);
  }

}
