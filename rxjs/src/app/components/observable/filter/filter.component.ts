import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  item:any;
  gender:any;
  id:any;

  dataArr = [
    {id:1,name:'Anum',gender:'male'},
    {id:2,name:'shefali',gender:'female'},
    {id:3,name:'shruti',gender:'female'},
    {id:4,name:'nidhi',gender:'female'},
    {id:5,name:'karan',gender:'male'},
    {id:6,name:'arjun',gender:'male'},
    {id:7,name:'raman',gender:'male'},
    {id:8,name:'tarun',gender:'male'},
  ]

  constructor() { }

  ngOnInit(): void {
    const source = from(this.dataArr);

    source
    .pipe(filter((member) => member.name.length > 5),toArray())
    .subscribe((data)=>{
      this.item = data;
    })

    source
    .pipe(filter((member) => member.gender === 'female'),toArray())
    .subscribe((data)=>{
      this.gender = data;
    })


    source
    .pipe(filter((member) => member.id <= 6),toArray())
    .subscribe((data)=>{
      this.id = data;
    })

  }

}
