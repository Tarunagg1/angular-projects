import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, take, takeLast, takeUntil, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss'],
})
export class TakeComponent implements OnInit {
  constructor(private sesignUtilityy: DesignUtilityService) {}
  Arr = ['tarun', 'arun', 'tarunsudbd', 'janap', 'april', 'msis'];

  ngOnInit(): void {
    let nameSource = from(this.Arr);

    nameSource.pipe(take(4)).subscribe((val) => {
      this.sesignUtilityy.printLi(val, 'ulcontainer');
    });

    // ex2
    nameSource.pipe(takeLast(5)).subscribe((val) => {
      this.sesignUtilityy.printLi(val, 'ulcontainer2');
    });

    // ex3
    let condition1 = timer(6000);
    let condition2 = fromEvent(document, 'click');

    const source = interval(1000);
    source.pipe(
      map((res) => 'number ' + res),
      takeUntil(condition2)
    ).subscribe((val) => {
      this.sesignUtilityy.printLi(val, 'ulcontainer3');
    });
  }
}
