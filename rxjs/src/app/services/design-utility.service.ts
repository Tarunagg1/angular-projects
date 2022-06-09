import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DesignUtilityService {

  exclusive = new Subject<boolean>();
  username = new BehaviorSubject<string>('Tarun');
  videoEmil = new ReplaySubject<string>(5);


  constructor() {}

  printLi(val, id) {
    let ele = document.createElement('li');
    ele.innerText = val;
    document.getElementById(id).appendChild(ele);
  }
}
