import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaskModel } from 'src/app/models/TaskModel';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todoForm!: FormGroup;

  task: TaskModel[] = [];
  inProgress: TaskModel[] = [];
  done: TaskModel[] = [];
  updatedId!: any;
  isEditEnable: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      item: ['', Validators.required],
    });
  }

  drop(event: CdkDragDrop<TaskModel[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addTask() {
    this.task.push({
      description: this.todoForm.value.item,
      done: false,
    });
    this.todoForm.reset();
  }

  updateTask() {
    console.log(this.updatedId);
    
    if (this.updatedId !== undefined) {
      this.task[this.updatedId].description = this.todoForm.value.item;
      this.task[this.updatedId].done = false;
      this.isEditEnable = false;

      this.todoForm.reset();
      this.updatedId = undefined;
    } else {      
      this.updatedId = undefined;
      this.isEditEnable = false;
      this.todoForm.reset();
    }
  }

  deleteTask(index: number, listName: string) {
    if (listName === 'todo') {
      this.task.splice(index, 1);
    } else if (listName === 'progress') {
      this.inProgress.splice(index, 1);
    } else {
      this.done.splice(index, 1);
    }
  }


  
  onEdit(item: TaskModel, index: number) {
    this.todoForm.controls['item'].setValue(item.description);
    this.updatedId = index;
    this.isEditEnable = true;
  }
}
