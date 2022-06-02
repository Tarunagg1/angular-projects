import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-toarray',
  templateUrl: './toarray.component.html',
  styleUrls: ['./toarray.component.scss'],
})
export class ToarrayComponent implements OnInit {
  sourceSub: Subscription;
  users = [
    { name: 'Anup', skil: 'Anugular' },
    { name: 'tarun', skil: 'react' },
    { name: 'aggarwal', skil: 'nodejs' },
    { name: 'nidhi', skil: 'javascript' },
    { name: 'shefali', skil: 'java' },
  ];

  constructor() {}

  ngOnInit(): void {
    const source = interval(1000);
    this.sourceSub = source.pipe(take(5), toArray()).subscribe((data) => {
      console.log(data);
    });

    const source2 = from(this.users);
    source2.pipe(toArray()).subscribe((result) => {
      console.log(result);
    });

    const source3 = of('trun', 'tarun', 'aggarwal', 'uxtrandz');
    source3
    .pipe(toArray())
    .subscribe((result) => {
      console.log(result);
    });
  }
}
