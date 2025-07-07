import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { CategoryDTO } from '../models/category-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categoryCollectionName: string = 'categories';

  constructor(private firestore: Firestore) {}

  loadCategory(): Observable<CategoryDTO[]> {
    const categoriesRef = collection(this.firestore, this.categoryCollectionName);
    return collectionData(categoriesRef, { idField: 'id' }) as Observable<CategoryDTO[]>;
  }

}
