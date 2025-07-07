import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, doc, setDoc, deleteDoc } from '@angular/fire/firestore';
import { CategoryDTO } from '../models/category-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoryCollectionName: string = 'categories';

  constructor(private firestore: Firestore) {
  }

  createCategory(categoryData: CategoryDTO) {
    const categoriesRef = collection(this.firestore, this.categoryCollectionName);
    return addDoc(categoriesRef, categoryData);
  }

  loadCategory(): Observable<CategoryDTO[]> {
    const categoriesRef = collection(this.firestore, this.categoryCollectionName);
    return collectionData(categoriesRef, { idField: 'id' }) as Observable<CategoryDTO[]>;
  }

  updateCategoryService(id: string, data: CategoryDTO) {
    const categoryDocRef = doc(this.firestore, `${this.categoryCollectionName}/${id}`);
    return setDoc(categoryDocRef, data);
  }


  deleteCategoryService(id: string) {
    const categoryDocRef = doc(this.firestore, `${this.categoryCollectionName}/${id}`);
    return deleteDoc(categoryDocRef);
  }
}
