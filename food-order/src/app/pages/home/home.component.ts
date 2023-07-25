import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  foods:Food[] = [];

  constructor(private readonly foodService:FoodService,activatedRoute:ActivatedRoute){
    this.foods = foodService.getAll();
    activatedRoute.params.subscribe((params:any) =>{
      if(params.searchTerm){
        this.foods = this.foodService.getAllFoodBySerchTerm(params.searchTerm);
      }else{
        this.foods = this.foodService.getAll();
      }
    })
  }

  ngOnInit(){}


}
