import { Component, OnInit } from '@angular/core';
import { interval, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  constructor() {}
  messag1: string;
  messag2: string;
  messag3: string;


  sub1: Subscription;
  sub2: Subscription;
  sub3: Subscription;

  ngOnInit(): void {
    // ex 01

    const brodCastVideos = interval(1000);
    this.sub1 = brodCastVideos
      .pipe(map((data) => `Video${data}`))
      .subscribe((res: any) => {
        this.messag1 = res;
      });

    setTimeout(() => {
      this.sub1.unsubscribe();
    }, 10000);

    // ex 02

    const brodCastVideos2 = interval(1000);
    this.sub2 = brodCastVideos2
      .pipe(map((data) => data*10))
      .subscribe((res: any) => {
        this.messag2 = res;
      });

    setTimeout(() => {
      this.sub2.unsubscribe();
    }, 10000);



  }
}
