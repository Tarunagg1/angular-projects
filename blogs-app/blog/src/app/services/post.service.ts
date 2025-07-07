import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, query, where,orderBy,limit } from '@angular/fire/firestore';
import { Post } from '../models/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postCollectionName: string = "posts";

  constructor(private firestore: Firestore) { }


  loadfeaturedPosts(): Observable<Post[]> {
    const appRef = collection(this.firestore,this.postCollectionName)
    const appQuery = query(appRef, where('isFeatured', '==', true));
    return collectionData(appQuery,{ idField: 'id' })as  Observable<Post[]>;
    // const postRef = collection(this.firestore, this.postCollectionName);
    // return collectionData(postRef, { idField: 'id' }) as Observable<Post[]>;
  }


  loadLatestPosts(): Observable<Post[]> {
    const appRef = collection(this.firestore,this.postCollectionName)
    const appQuery = query(appRef, where('isFeatured', '==', true));
    return collectionData(appQuery,{ idField: 'id' })as  Observable<Post[]>;
    // const postRef = collection(this.firestore, this.postCollectionName);
    // return collectionData(postRef, { idField: 'id' }) as Observable<Post[]>;
  }


}
