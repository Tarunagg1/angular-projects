import { Observable, interval, map, Subscriber } from "rxjs";

// function listenRadio(): Observable<any> {
//   return interval(1000);
// }

// listenRadio().subscribe(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// interval(1000)
// .pipe(map(data => data*2))
// .subscribe((data: number) => {
//   console.log(data);
// });

function fetchUser() {
  const observable = new Observable((observer) => {
    const user = { data: { firstName: "tarun", mobile: "999999999" } };
    observer.next(user);
  });

  return observable.pipe(
    map((data: any) => {
      return data.data;
    })
  );
}

fetchUser().subscribe((user: any) => {
  console.log(user);
});
