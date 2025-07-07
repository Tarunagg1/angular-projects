import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {
  allPosts: any[] = [];


  constructor(private postService: PostService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.postService.loadPosts().subscribe((data) => {
      console.log(data);
      this.allPosts = data;
    })
  }


  deletePostData(data: any) {
    this.postService.deletePost(data.id)
      .then((docref) => {
        this.toastr.success('Success!', 'post deleted!');
      }).catch((err) => {
        this.toastr.error("Something went wrong");
      });

  }

}
