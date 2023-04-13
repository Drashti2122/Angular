import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, of, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {
  users = [
    { name: "Drashti", skill: "Angular" },
    { name: "Mansi", skill: "WordPress" },
    { name: "Hetvi", skill: "React" },
    { name: "Princy", skill: ".NET" },
    { name: "Krupa", skill: "Angular" }
  ]
  constructor() { }

  sourceSub?: Subscription
  ngOnInit(): void {
    //Ex-01
    const source = interval(5000);
    this.sourceSub = source.pipe(
      take(5),
      toArray()
    ).subscribe(res => {
      console.log(res)
    })

    //Ex-02
    const source2 = from(this.users);
    source2.pipe(toArray()).subscribe(res => {
      console.log(res)
    })

    //Ex-03
    const source3 = of("Drashti", "Hetal", "Keval");
    source3.pipe(toArray()).subscribe(res => {
      console.log(res)
    });

  }
}
