import { Post } from 'src/app/models/post.model';

export class AddPost {
  static readonly type = '[post] Add';
  constructor(public payload: Post) {}
}

export class GetPosts {
  static readonly type = '[post] GetPosts';
  constructor() {}
}

export class SetSelectedPost {
    static readonly type = '[post] Set';
    constructor(public id:number) {}
  }

export class DeletePosts {
  static readonly type = '[post] Delete';
  constructor(public id: number) {}
}

export class UpdatePosts {
  static readonly type = '[post] Update';
  constructor(public payload: Post) {}
}
