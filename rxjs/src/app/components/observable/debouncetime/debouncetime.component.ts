import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-debouncetime',
  templateUrl: './debouncetime.component.html',
  styleUrls: ['./debouncetime.component.scss'],
})
export class DebouncetimeComponent implements OnInit {
  @ViewChild('myinput') myInput: ElementRef;
  @ViewChild('myinput2') myinput2: ElementRef;

  data: any = null;
  data2: any = null;

  constructor(private loadingBar: LoadingBarService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const searchterm = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(
      map((event) => event.target.value),
      debounceTime(1000)
    );

    searchterm.subscribe((result: string) => {
      this.data = result;
      console.log(result);
      this.loadingBar.start();

      setTimeout(() => {
        this.data = null;
        this.loadingBar.stop();
      }, 1000);
    });

    // distnict
    const searchterm2 = fromEvent<any>(
      this.myinput2.nativeElement,
      'keyup'
    ).pipe(
      map((event) => event.target.value),
      debounceTime(1000),
      distinctUntilChanged()
    );

    searchterm2.subscribe((result: string) => {
      this.data2 = result;
      console.log(result);
      this.loadingBar.start();

      setTimeout(() => {
        this.data2 = null;
        this.loadingBar.stop();
      }, 1000);
    });
  }
}
