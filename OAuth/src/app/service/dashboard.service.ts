import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, take } from 'rxjs';
import { DesignutilityService } from './designutility.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(
    private http: HttpClient,
    private authService: DesignutilityService
  ) {}

  fetchData() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}
