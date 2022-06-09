import { Component, OnInit } from '@angular/core';
import { delay, from, map, of, switchAll, switchMap } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss'],
})
export class SwitchMapComponent implements OnInit {
  constructor(private _designUtlity: DesignUtilityService) {}

  getData(data) {
    return of(data + ' video upload').pipe(delay(1000));
  }

  ngOnInit(): void {
    const source = from(['Tech', 'Comady', 'News'])

    source.pipe(map((data) => this.getData(data))).subscribe((result) => {
      console.log(result);
      this._designUtlity.printLi(result,'contaiiner1')
    });


    source.pipe(map((data) => this.getData(data)),switchAll()).subscribe((result) => {
      console.log(result);
      this._designUtlity.printLi(result,'contaiiner2')
    });

    source.pipe(switchMap((data) => this.getData(data))).subscribe((result) => {
      console.log(result);
      this._designUtlity.printLi(result,'contaiiner3')
    });




  }
}
