import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { Post } from '../models/post.model';
import { SetSelectedPost } from '../store/action/post.action';
import { PostState } from '../store/state/post.state';

@Component({
  selector: 'app-getemployeebyid',
  templateUrl: './getemployeebyid.component.html',
  styleUrls: ['./getemployeebyid.component.css'],
})
export class GetemployeebyidComponent implements OnInit,OnDestroy {
  item!: Post;
  selectedPostSub!:Subscription;

  @Select(PostState.getSelectedPost) singllePost$!: Observable<any[]>;

  constructor(private activatedRoute: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: any) => {
      
      let id = params.get('id');
      
      this.getPostById(id);
    });
  }

  getPostById(id: number) {
    this.store.dispatch(new SetSelectedPost(id));
    this.selectedPostSub = this.singllePost$.subscribe((data: any) => {
      this.item = data;      
    });
  }

  ngOnDestroy() {
    this.selectedPostSub.unsubscribe();
  }
}
