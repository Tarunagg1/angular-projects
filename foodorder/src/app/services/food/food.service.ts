import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { sample_foods, sample_tags } from 'src/data';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAll(): Food[] {
    return sample_foods;
  }
}
