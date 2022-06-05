import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DesignUtilityService {

  exclusive = new Subject<boolean>();
  username = new BehaviorSubject<string>('Tarun');

  constructor() {}

  printLi(val, id) {
    let ele = document.createElement('li');
    ele.innerText = val;
    document.getElementById(id).appendChild(ele);
  }
}
