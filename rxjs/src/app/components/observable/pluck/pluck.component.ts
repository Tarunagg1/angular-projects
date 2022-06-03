import { Component, OnInit } from '@angular/core';
import { from, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss'],
})
export class PluckComponent implements OnInit {
  users = [
    { name: 'Tarun', id: 1, job: { title: 'Ui ff' } },
    { name: 'Arun', id: 2, job: { title: 'Ui ddd' } },
    { name: 'Aggarwal', id: 3, job: { title: 'Ui dev' } },
    { name: 'Nidhi', id: 4, job: { title: 'Ui dd' } },
    { name: 'John', id: 5, job: { title: 'Ui iijij' } },
  ];
  data: any;
  data2: any;


  constructor() {}

  ngOnInit(): void {
    from(this.users)
      .pipe(pluck('name'), toArray())
      .subscribe((data) => {
        this.data = data;
      });

    from(this.users)
      .pipe(pluck('job','title'), toArray())
      .subscribe((data) => {
        this.data2 = data;
      });
  }
}
