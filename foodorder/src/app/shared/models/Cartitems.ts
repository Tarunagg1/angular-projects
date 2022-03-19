import { Food } from "./Food";

export class Cartitem{
    food:Food;
    quantity:number = 1;

    constructor(food:Food) {
        this.food = food;
    }

    // price: number = this.food.price;


    get getPrice(): Number{
        return this.food.price * this.quantity;
    }
    

}