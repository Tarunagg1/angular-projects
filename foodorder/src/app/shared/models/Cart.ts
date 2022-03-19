import { Cartitem } from './Cartitems';

export class Cart {
  items: Cartitem[] = [];

  get totalPrice(): Number {
    let totalPrice = 0;

    this.items.forEach((item) => {
      totalPrice +=100;
    });
    return totalPrice;
  }
}
