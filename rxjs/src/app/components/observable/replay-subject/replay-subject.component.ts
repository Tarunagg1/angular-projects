import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss'],
})
export class ReplaySubjectComponent implements OnInit {
  constructor(private designUtility: DesignUtilityService) {}

  user1Val = ['tarun', 'aggarwal'];
  user2Val = [];
  user3Val = [];

  subscriveMode2: boolean = false;
  subscriveMode3: boolean = false;

  // subscriptions
  subscriptions2: Subscription;
  subscriptions3: Subscription;

  ngOnInit(): void {
    this.designUtility.videoEmil.subscribe((value) => {
      this.user1Val.push(value);
    });
  }

  addvideo(event) {
    this.designUtility.videoEmil.next(event.value);
  }

  user2Subscribe() {
    if (this.subscriveMode2) {
      this.subscriptions2.unsubscribe();
    } else {
      this.subscriptions3 = this.designUtility.videoEmil.subscribe((value) => {
        this.user2Val.push(value);
      });
    }
    this.subscriveMode2 = !this.subscriveMode2;
  }

  user2UnSubscribe() {
    if (this.subscriveMode3) {
      this.subscriptions3.unsubscribe();
    } else {
      this.subscriptions3 = this.designUtility.videoEmil.subscribe((value) => {
        this.user2Val.push(value);
      });
    }
    this.subscriveMode3 = !this.subscriveMode3;
  }
}
