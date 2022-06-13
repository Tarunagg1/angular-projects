import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from 'src/app/service/designutility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logdIn: boolean = false;

  constructor(private _authService:DesignutilityService) { }

  ngOnInit(): void {
    // console.log('kinikj');
    // console.log(this.logdIn);

    this._authService.user.subscribe((user) => {
      // console.log(user);
      // console.log('y7t6g');
    
      this.logdIn = !user ? false : true;
      // console.log(this.logdIn);
      
    })
  }

}
