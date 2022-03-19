import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  stringItem: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['searchItem']) {
        this.stringItem = params['searchItem'];
      }
    });
  }

  search(): void {
    if (this.stringItem) {
      this.router.navigateByUrl('/search/' + this.stringItem);
    }
  }
}
