import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private _dashboardService: DashboardService,private http:HttpClient) { }

  ngOnInit(): void {
  }

  

}
