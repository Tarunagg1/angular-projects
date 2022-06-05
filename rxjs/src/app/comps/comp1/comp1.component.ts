import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component implements OnInit {
  username: string;

  constructor(private _designnUtility: DesignUtilityService) {}

  ngOnInit(): void {
    this._designnUtility.username.subscribe((val) => {
      this.username = val;
    });
  }

  onChange(element) {
    this._designnUtility.username.next(element.value);
  }
}
