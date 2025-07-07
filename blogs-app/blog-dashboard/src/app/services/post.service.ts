import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Firestore, addDoc, collection, collectionData, docData, doc, setDoc, deleteDoc } from '@angular/fire/firestore';
import { Post } from '../models/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postCollectionName: string = "posts";

  constructor(private firestore: Firestore) { }

  uploadImage(selectedImg: any) {
    const filePath = `postImg/${Date.now()}`;
    // const storageRef = this.storage.ref(filePath);

    // return this.storage.upload(filePath, selectedImg);
  }

  createPost(postData: Post) {
    const postRef = collection(this.firestore, this.postCollectionName);
    return addDoc(postRef, postData);
  }


  loadPosts(): Observable<Post[]> {
    const categoriesRef = collection(this.firestore, this.postCollectionName);
    return collectionData(categoriesRef, { idField: 'id' }) as Observable<Post[]>;
  }

  getPostByID(id: string) {
    const bookRef = doc(this.firestore, `${this.postCollectionName}/${id}`);
    return docData(bookRef, { idField: 'id' }) as Observable<Post>;
  }

  updatePost(id: string, data: Post) {
    const postDocRef = doc(this.firestore, `${this.postCollectionName}/${id}`);
    return setDoc(postDocRef, data);
  }


  deletePost(id: string) {
    const postDocRef = doc(this.firestore, `${this.postCollectionName}/${id}`);
    return deleteDoc(postDocRef);
  }

}
