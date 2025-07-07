import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featuredPosts: Post[] = [];
  constructor(private postService: PostService) {
    this.postService.loadfeaturedPosts().subscribe((posts) =>{
      console.log(posts);
      this.featuredPosts = posts;
    })
  }

  ngOnInit(): void {}



}
