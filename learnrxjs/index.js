"use strict";
// import { Observable, interval, map, Subscriber } from "rxjs";
Object.defineProperty(exports, "__esModule", { value: true });
// const obc = new Observable((observer: any) => {
//   let count = 0;
//   const producer = setInterval(() => {
//       observer.next(count++)
//   }, 1000);
//   return ()=>{
//     clearInterval(producer)
//   }
// })
// obc.subscribe({
//   next: (data: number) => console.log(data),
//   error(err) {
//       console.log(err);
//   },
//   complete: () => {
//     console.log('done');
//   }
// })
//#----------- OF --------------- # //
var rxjs_1 = require("rxjs");
var names = ["tarun", "arun", "aravind", "shefali", "karan"];
// let num$ = of(1,2,3);
// let nameSet = from(["tarun","Aggarwal"]);
// const isAllowed = Promise.resolve(true)
// concat(num$,nameSet,isAllowed)
// .subscribe(console.log)
var rxjs_2 = require("rxjs");
(0, rxjs_1.from)([1, 2, 3, 4, 5])
    .pipe((0, rxjs_2.map)(function (v, idx) { return v * 2; })).subscribe(console.log);
//# sourceMappingURL=index.js.map