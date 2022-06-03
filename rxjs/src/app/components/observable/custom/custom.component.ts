import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
})
export class CustomComponent implements OnInit {
  constructor(private ulilsService: DesignUtilityService) {}
  
  techStatus:string;

  ngOnInit(): void {
    // example 1 manul

    const customObs = Observable.create((observer: any) => {
      let count = 1;
      let interval = setInterval(() => {
        observer.next('technoology ' + count);
        count++;
        if (count === 5) {
          observer.complete();
          // observer.error(new Error("limit exceeds"));
          // clearInterval(interval);
        }
      }, 2000);
    });

    customObs.subscribe((data: any) => {
      console.log(data);
      this.ulilsService.printLi(data, 'ul1');
    },(err: any) => {
      this.techStatus="error"
    },() => {      
      this.techStatus="completed"
    });
  }
}
