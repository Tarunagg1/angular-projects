// import { Observable, interval, map, Subscriber } from "rxjs";

// // function listenRadio(): Observable<any> {
// //   return interval(1000);
// // }

// // listenRadio().subscribe(
// //   (data) => {
// //     console.log(data);
// //   },
// //   (err) => {
// //     console.log(err);
// //   }
// // );

// // interval(1000)
// // .pipe(map(data => data*2))
// // .subscribe((data: number) => {
// //   console.log(data);
// // });

// function fetchUser() {
//   const observable = new Observable((observer) => {
//     const user = { data: { firstName: "tarun", mobile: "999999999" } };
//     observer.next(user);
//   });

//   return observable.pipe(
//     map((data: any) => {
//       return data.data;
//     })
//   );
// }

// fetchUser().subscribe((user: any) => {
//   console.log(user);
// });

import { Observable } from 'rxjs';

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

import { of, from, fromEvent, interval, timer, range, generate,iif } from 'rxjs';
let names = ["tarun", "arun", "aravind", "shefali", "karan"]

//#----------- FROM --------------- # //


// const obs  = from(names)


// obs.subscribe(console.log)



//#----------- fromEvent --------------- # //

// const obs = fromEvent(document,"click");

// obs.subscribe(console.log)

//#----------- INTERVAL --------------- # //

// const obs$  = interval(1000);
// obs$.subscribe(console.log)


//#----------- TIMER --------------- # //


// timer(10000,1000).subscribe(console.log)



//#----------- RANGE --------------- # //

// range(10,1).subscribe(console.log)


//#----------- GENRATE --------------- # //


// generate({
//     initialState:1,
//     condition:(v) => v < 10,
//     iterate:(v) => v * 2
// }).subscribe(console.log)


//#----------- IIF --------------- # //


// let isAuthnticated = true;

// const obs$ = iif(() => isAuthnticated, of(["AJit","Ronaldo"]), of([]));

// obs$.subscribe((res)=>{
//     console.log(res);
// })

// isAuthnticated = false;

// obs$.subscribe((res)=>{
//     console.log(res);
// })




import {concat} from 'rxjs';



// let num$ = of(1,2,3);
// let nameSet = from(["tarun","Aggarwal"]);
// const isAllowed = Promise.resolve(true)

// concat(num$,nameSet,isAllowed)
// .subscribe(console.log)

import {map} from 'rxjs';

from([1,2,3,4,5])
.pipe(
    map((v,idx) => v*2)
).subscribe(console.log)

