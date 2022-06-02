import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss'],
})
export class IntervalComponent implements OnInit {
  obsMessage;
  videoSubscription: Subscription;

  constructor(private _designUtilityService: DesignUtilityService) {}

  ngOnInit(): void {
    const broadCastVideo = timer(5000,1000);

    this.videoSubscription = broadCastVideo.subscribe((res) => {
      console.log(res);
      this.obsMessage = 'Video count ' + res;
      this._designUtilityService.printLi(this.obsMessage, 'elContainer1');
      this._designUtilityService.printLi(this.obsMessage, 'elContainer2');
      this._designUtilityService.printLi(this.obsMessage, 'elContainer3');

      if (res > 5) {
        this.videoSubscription.unsubscribe();
      }
    });
  }
}
