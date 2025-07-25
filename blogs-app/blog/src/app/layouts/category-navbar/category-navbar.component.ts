import { Component, OnInit } from '@angular/core';
import { CategoryDTO } from 'src/app/models/category-dto';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})
export class CategoryNavbarComponent implements OnInit{
  categoryArray:CategoryDTO[] = [];

  constructor(private categoryService: CategoriesService) {}

  ngOnInit(): void {
    this.categoryService.loadCategory().subscribe((category)=>{
      this.categoryArray = category;
    })
  }
}
