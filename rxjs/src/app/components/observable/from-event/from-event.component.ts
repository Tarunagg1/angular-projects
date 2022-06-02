import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss'],
})
export class FromEventComponent implements OnInit {
  constructor() {}

  @ViewChild('addButton') addBtn!: ElementRef;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    let count = 1;

    fromEvent(this.addBtn.nativeElement, 'click').subscribe((event) => {
      this.uiDataPrint(count++);
    });
  }

  uiDataPrint(count: any) {
    let ele = document.createElement('li');
    ele.innerText = 'tarun ' + count;
    document.getElementById('elContainer').appendChild(ele);
  }
}
