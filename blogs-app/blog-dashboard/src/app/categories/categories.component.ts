import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { CategoryDTO } from '../models/category-dto';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: CategoryDTO[] = [];
  categoryName!: string;
  categoryId!: string;


  constructor(private categoryService: CategoryService, private toastr: ToastrService) {
  }


  ngOnInit(): void {
    this.getCategories()
  }

  onSubmit(data: any) {
    let categoryData: CategoryDTO = {
      category: data.value['category']
    };

    if (this.categoryName && this.categoryId) {
      this.categoryService.updateCategoryService(this.categoryId, categoryData)
        .then((docref) => {
          data.reset()
          this.categoryId = '';
          this.toastr.success('Success!', 'Category updated!');
        }).catch((err) => {
          this.toastr.error("Something went wrong");
        });

    } else {
      this.categoryService.createCategory(categoryData)
        .then((docref) => {
          data.reset()
          this.toastr.success('Success!', 'Category created!');
        }).catch((err) => {
          this.toastr.error("Something went wrong");
        });

    }

  }


  getCategories() {
    this.categoryService.loadCategory().subscribe((data) => {
      this.categories = data;
    });
  }

  editCategory(data: any) {
    // console.log(data);

    this.categoryName = data.category;
    this.categoryId = data.id;

  }


  deleteCategory(data: any) {
    this.categoryService.deleteCategoryService(data.id)
      .then((docref) => {
        this.toastr.success('Success!', 'Category deleted!');
      }).catch((err) => {
        this.toastr.error("Something went wrong");
      });

  }
}
