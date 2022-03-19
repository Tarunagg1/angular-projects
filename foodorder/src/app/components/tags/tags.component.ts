import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food/food.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent implements OnInit {
  
  @Input()
  foodPagetags?: string[];
  
  tags: Tag[] = [];

  constructor(private foofService: FoodService) {}

  ngOnInit(): void {
    if(!this.foodPagetags){
      this.tags = this.foofService.getAllTags();
    }
  }
}
