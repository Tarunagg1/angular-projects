import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { EmplloyeeService } from 'src/app/appservices/emplloyee.service';
import { Post } from '../../models/post.model';
import {
  AddPost,
  DeletePosts,
  GetPosts,
  SetSelectedPost,
} from '../action/post.action';

export class PostStateModel {
  employees: any;
  employeeLoaded!: boolean;
  selectedEmplloyee!: any;
}

@State<PostStateModel>({
  name: 'post',
  defaults: {
    employees: [],
    employeeLoaded: false,
    selectedEmplloyee: null,
  },
})
@Injectable()
export class PostState {
  constructor(private EmplloyeeService: EmplloyeeService) {}

  @Selector()
  static getPostsList(state: PostStateModel) {
    return state.employees;
  }

  @Selector()
  static postLoad(state: PostStateModel) {
    return state.employeeLoaded;
  }

  @Selector()
  static getSelectedPost(state: PostStateModel) {
    return state.selectedEmplloyee;
  }

  @Action(AddPost)
  addPost(
    { getState, patchState }: StateContext<PostStateModel>,
    { payload }: AddPost
  ) {
    return this.EmplloyeeService.addPost(payload).pipe(
      tap((res: any) => {
        const state = getState();
        patchState({
          employees: [...state.employees, res],
        });
      })
    );
  }

  @Action(GetPosts)
  getPosts({ getState, setState }: StateContext<PostStateModel>) {
    return this.EmplloyeeService.getPosts().pipe(
      tap((res) => {
        const state = getState();
        setState({ ...state, employeeLoaded: true, employees: res });
      })
    );
  }

  @Action(SetSelectedPost)
  setSelectedPost(
    { getState, setState }: StateContext<PostStateModel>,
    { id }: SetSelectedPost
  ) {
    const state = getState();
    const empList = state.employees;

    if (empList.length > 0) {
      let data = empList[id - 1];
      setState({ ...state, selectedEmplloyee: data });
    } else {
      this.EmplloyeeService.getPostsById(id).subscribe((res) => {
        setState({ ...state, selectedEmplloyee: res });
      });
    }
  }

  @Action(DeletePosts)
  deletePost(
    { getState, setState }: StateContext<PostStateModel>,
    { id }: SetSelectedPost
  ) {
    return this.EmplloyeeService.deletePosts(id).pipe(
      tap((res: any) => {
        const state = getState();
        const filteredEmp = state.employees.filter((emp: any) => emp.id !== id);
        setState({ ...state, employees: filteredEmp });
      })
    );
  }
}
