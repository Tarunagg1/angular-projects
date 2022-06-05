import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  username:string;

  constructor(private _designnUtility: DesignUtilityService) {
      this._designnUtility.username.subscribe(val=>{
        this.username = val;
      })
   }

  ngOnInit(): void {
    this._designnUtility.exclusive.next(true)
  }

  ngOnDestroy(): void {
    this._designnUtility.exclusive.next(false)
  }

}
