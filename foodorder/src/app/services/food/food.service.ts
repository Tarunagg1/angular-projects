import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from 'src/app/shared/models/Tag';
import { sample_foods, sample_tags } from 'src/data';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAll(): Food[] {
    return sample_foods;
  }

  getFoodByTag(tag: string): Food[] {
    if (tag === 'all') {
      return this.getAll();
    }
    return this.getAll().filter((food) => food.tags?.includes(tag));
  }

  getFoodById(id: any) {
    return this.getAll().find((food) => food.id === id)!;
  }

  getAllTags(): Tag[] {
    return sample_tags;
  }
}
