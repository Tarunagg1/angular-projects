import { Component, OnInit } from '@angular/core';
import { interval, map, Subscription, tap } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss'],
})
export class TapComponent implements OnInit {
  constructor(private designutliltu: DesignUtilityService) {}
  mystring:string = "";

  ngOnInit(): void {
    const source = interval(2000);
    const Arr = ['tarun', 'arun', 'tarunsudbd', 'janap', 'april', 'msis'];
    const Arr2 = ['red', 'green', 'yellow', 'orange', 'purple', 'blue'];

    let obs1: Subscription;
    let obs2: Subscription;

    obs1 = source
      .pipe(
        tap((res) => {
          this.mystring = Arr2[res];
          if (res === Arr.length) {
            obs1.unsubscribe();
          }
        }),
        map((res) => Arr[res])
      )
      .subscribe((val) => {
        console.log(val);
        this.designutliltu.printLi(val, 'ulcontainer');
      });


      obs2 = source
      .pipe(
        tap((res) => {
          if (res === Arr2.length) {
            obs2.unsubscribe();
          }
        }),
        map((res) => Arr2[res])
      )
      .subscribe((val) => {
        console.log(val);
        this.designutliltu.printLi(val, 'ulcontainer2');
      });
  }
}
