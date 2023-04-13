import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  data!: any;
  data2!: any;
  data3!: any;
  dataArr = [
    { id: 1, name: 'drashti', gender: 'Female' },
    { id: 2, name: 'Hetvi', gender: 'Female' },
    { id: 2, name: 'Dhruv', gender: 'Male' },
    { id: 4, name: 'Mansi', gender: 'Female' },
    { id: 5, name: 'Dhruvi', gender: 'Female' },
    { id: 6, name: 'Krish', gender: 'Male' },
    { id: 7, name: 'Harsh', gender: 'Male' }
  ]
  constructor() { }
  ngOnInit(): void {
    const source = from(this.dataArr)

    //Ex-01-Filter by length
    source.pipe(filter(member => member.name.length < 6),
      toArray()).subscribe(res => {
        this.data = res
      })

    //Ex-02-Filter by gender
    source.pipe(filter(member => member.gender == 'Female'),
      toArray()).subscribe(res => {
        this.data2 = res
      })

    //Ex-01-Filter by nth Item
    source.pipe(filter(member => member.id <= 5), toArray()).subscribe(res => {
      this.data3 = res
    })
  }
}
