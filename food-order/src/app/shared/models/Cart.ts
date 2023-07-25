import { CartItem } from "./Carditem";

export class Cart{
  items:CartItem[] = [];
  totalPrice:number = 0;
  totalCount:number = 0;

  // constructor(){
  //   this.items.push(new CartItem({
  //     id:'1',
  //     name: 'Pizza Pepperoni',
  //     cookTime: '10-20',
  //     price: 10,
  //     favorite: false,
  //     origins: ['italy'],
  //     stars: 4.5,
  //     imageUrl: 'assets/food-1.jpg',
  //     tags: ['FastFood', 'Pizza', 'Lunch'],
  //   }))
  // }
}
