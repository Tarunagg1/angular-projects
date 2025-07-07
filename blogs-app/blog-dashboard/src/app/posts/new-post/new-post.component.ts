import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { Post } from '../../models/post';
import { PostService } from 'src/app/services/post.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  permaLink: string = '';
  imgSrc: any = './assets/img-placeholder.jpg';
  selectedImg: any;
  categories: Array<any>;
  htmlContent: any;
  postForm: FormGroup;
  formStatus: string = 'Add New'
  editPostId: string;


  ngOnInit(): void {
    this.categoryService.loadCategory().subscribe((data) => {
      this.categories = data;
    })
  }

  constructor(private categoryService: CategoryService, private fb: FormBuilder, private postService: PostService,
    private toastr: ToastrService, private router: Router, private route: ActivatedRoute) {

    this.route.queryParams.subscribe((value: any) => {
      this.editPostId = value.id;
      if (this.editPostId) {
        this.formStatus = "Edit"
        this.postService.getPostByID(value.id).subscribe((data: Post) => {
          this.imgSrc = data.postImgPath;
          // console.log(data);
          this.permaLink = data.permalink;

          this.postForm = this.fb.group({
            title: [data.title, [Validators.required, Validators.minLength(10)]],
            permalink: [data.permalink, Validators.required],
            excerpt: [data.excerpt, [Validators.required, Validators.minLength(10)]],
            category: [`${data.category.categoryId}-${data.category.category}`, Validators.required],
            postImg: [data.postImgPath, Validators.required],
            content: [data.content, Validators.required]
          });

        });
      }
      // console.log(value);
    });

    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      permalink: ['', Validators.required],
      excerpt: ['', [Validators.required, Validators.minLength(10)]],
      category: ['', Validators.required],
      postImg: ['', Validators.required],
      content: ['', Validators.required]
    });

  }

  onTitleChanged($event: any) {
    const title = $event.target.value
    this.permaLink = title.replace(/\s/g, '-');
  }

  showPreview($event: any): void {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imgSrc = e.target.result;
    }

    reader.readAsDataURL($event.target.files[0]);
    this.selectedImg = $event.target.files[0];
  }

  get fc(): any {
    return this.postForm.controls;
  }

  onSubmit() {
    const catArr = this.postForm.value.category.split('-');

    const postData: Post = {
      title: this.postForm.value.title,
      permalink: this.postForm.value.permalink,
      category: {
        categoryId: catArr[0],
        category: catArr[1]
      },
      excerpt: this.postForm.value.excerpt,
      postImgPath: "https://fastly.picsum.photos/id/103/2592/1936.jpg?hmac=aC1FT3vX9bCVMIT-KXjHLhP6vImAcsyGCH49vVkAjPQ",
      content: this.postForm.value.content,
      isFeatured: false,
      views: 0,
      status: 'new',
      createdAt: new Date()
    };

    // this.postService.uploadImage(this.selectedImg)
    // .then((file) => {
    //   console.log(file);
    // });

    if (this.formStatus === "Add New") {
      this.postService.createPost(postData)
        .then((response) => {
          this.postForm.reset();
          this.imgSrc = './assets/img-placeholder.jpg';
          this.toastr.success('Success!', 'post created!');
          this.router.navigate(['/posts']);
        })
    } else {
      this.postService.updatePost(this.editPostId, postData)
        .then((response) => {
          this.formStatus = "Add New";
          this.postForm.reset();
          this.imgSrc = './assets/img-placeholder.jpg';
          this.toastr.success('Success!', 'post updated!');
          this.router.navigate(['/posts']);
        })
    }

  }

}
