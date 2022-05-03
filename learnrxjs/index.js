"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
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
    var observable = new rxjs_1.Observable(function (observer) {
        var user = { data: { firstName: "tarun", mobile: "999999999" } };
        observer.next(user);
    });
    console.log(observable);
    return observable.pipe((0, rxjs_1.map)(function (data) { return data.data; }));
}
fetchUser()
    .subscribe(function (user) {
    console.log(user);
});
//# sourceMappingURL=index.js.map