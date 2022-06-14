import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from './service/designutility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'OAuth';

  constructor(private _authService: DesignutilityService){}

  ngOnInit() {  
    this._authService.autoSignIn();
  }

}
