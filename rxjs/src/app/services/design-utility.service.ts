import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DesignUtilityService {
  constructor() {}

  printLi(val, id) {
    let ele = document.createElement('li');
    ele.innerText = val;
    document.getElementById(id).appendChild(ele);
  }
}
