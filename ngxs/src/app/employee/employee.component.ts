import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { EmplloyeeService } from '../appservices/emplloyee.service';
import { Post } from '../../app/models/post.model';
import { Select, Store } from '@ngxs/store';
import { AddPost, DeletePosts, GetPosts } from '../store/action/post.action';
import { Observable, Subscription } from 'rxjs';
import { PostState } from '../store/state/post.state';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit, OnDestroy {
  empForm: any;
  postsData: any;

  showModal: boolean = false;
  endiModel: boolean = false;
  displayStyle: string = 'none';
  editMode: boolean = false;

  @Select(PostState.getPostsList) posts$!: Observable<any[]>;
  @Select(PostState.postLoad) postLoadded$!: Observable<any[]>;
  postLoaddedSub!: Subscription;

  uid: Number = Math.floor(Date.now() % 1000000);

  constructor(
    private formBuilder: FormBuilder,
    private EmplloyeeService: EmplloyeeService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.getPosts();

    this.posts$.subscribe((data) => {
      this.postsData = data;
    });

    this.empForm = this.formBuilder.group({
      id: [''],
      userid: ['20', Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  onPostSubmit() {
    if (this.editMode) {
      this.EmplloyeeService.updatePosts(
        this.empForm.value.id,
        this.empForm.value
      ).subscribe(
        (data) => {
          console.log('oijj9io');
          this.getPosts();
        },
        (err) => {
          console.log(err);
        }
        );
      } else {
        if (this.empForm.valid) {
          this.store.dispatch(new AddPost(this.empForm.value));
          this.onCloseModal();
        } else {
        console.log('validation fail');
      }
    }
  }

  getPosts() {
    this.postLoaddedSub = this.postLoadded$.subscribe((res) => {
      if (!res) {
        this.store.dispatch(new GetPosts()); //
      }
    });
  }

  onEditEmployee(item: Post) {
    console.log(item);

    this.showModal = true;
    this.displayStyle = 'block';
    this.editMode = true;

    this.empForm.patchValue(item);
  }

  onAddEmpployee() {
    this.showModal = true;
    this.displayStyle = 'block';
  }

  onCloseModal() {
    this.showModal = false;
    this.displayStyle = 'none';
    this.editMode = false;
  }

  onDeletePost(id: number) {
    this.store.dispatch(new DeletePosts(id));
    // this.EmplloyeeService.deletePosts(id).subscribe(
    //   (data) => {
    //     this.getPosts();
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
  }

  ngOnDestroy(): void {
    this.postLoaddedSub.unsubscribe();
  }
}
