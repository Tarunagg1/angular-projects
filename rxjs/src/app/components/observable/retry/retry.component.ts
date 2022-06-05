import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.fetchDetails();
  }

  fetchDetails(){
    this.http.get("https://api.github.com/users/mosh-hamedani")
  }

}
