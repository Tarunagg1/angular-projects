import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss'],
})
export class PromiseComponent implements OnInit {
  constructor() {}
  promiseval!: any;

  ngOnInit(): void {
    let buyLaptop = new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve('Promise is resolve');
      }, 3000);
    });

    buyLaptop.then((data) => {
      console.log(data);
      this.promiseval = data;
    });
  }
}
