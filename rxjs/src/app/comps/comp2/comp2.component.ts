import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

  username:string;
  constructor(private _designnUtility: DesignUtilityService) {}

  ngOnInit(): void {
    this._designnUtility.username.subscribe(val=>{
      this.username = val
    })
  }
  onChange(element) {
    this._designnUtility.username.next(element.value);
  }

}
