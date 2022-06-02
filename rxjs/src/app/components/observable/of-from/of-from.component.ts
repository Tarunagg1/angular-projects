import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss'],
})
export class OfFromComponent implements OnInit {
  constructor(private _designUtilityService: DesignUtilityService) {}

  obsMsg;

  ngOnInit(): void {
    const Obsl = of('Anup', 'Tarun', 'Aggarwal');
    Obsl.subscribe((res) => {
      this._designUtilityService.printLi(res, 'ulConntainer');
    });

    const Obs2 = of({ a: 'Anup', b: 'Tarun', c: 'Aggarwal' });
    Obs2.subscribe((res) => {
      this.obsMsg = res;
    });

    let arr = ['Anup', 'Tarun', 'Aggarwal'];
    const Obs3 = from(arr);

    Obs3.subscribe((res) => {
      this._designUtilityService.printLi(res, 'ulConntainer3');
    });

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('promise resolve');
      }, 3000);
    });

    promise.then((res) => {
      console.log(res);
      this._designUtilityService.printLi(res, 'ulConntainer4');
    });

    // welcome to string

    
  }
}
