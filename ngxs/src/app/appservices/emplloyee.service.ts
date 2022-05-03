import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class EmplloyeeService {
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  addPost(data: Post) {
    return this.http.post(this.url, data);
  }

  getPosts() {
    return this.http.get(this.url);
  }

  getPostsById(id:number) {
    return this.http.get(`${this.url}/${id}`);
  }

  deletePosts(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  updatePosts(id: number, data: Post) {
    return this.http.put(`${this.url}/${id}`, data);
  }
}
