import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {
  constructor() { }
  data!: any;
  data2!: any;
  users = [
    {
      name: "Drashti",
      skills: 'Angular',
      job: {
        title: "Frontend Developer",
        exp: "10 years"
      }
    },
    {
      name: "Hetvi",
      skills: 'React',
      job: {
        title: "HTML Developer",
        exp: "10 years"
      }
    },
    {
      name: "Mansi",
      skills: 'WordPress',
      job: {
        title: "UI Developer",
        exp: "10 years"
      }
    },
    {
      name: "Mani",
      skills: 'JAVA',
      job: {
        title: "JAVA Developer",
        exp: "10 years"
      }
    }
  ]

  ngOnInit(): void {
    //Ex-01
    from(this.users).pipe(pluck('name'), toArray()).subscribe(res => {
      // console.log(res)
      this.data = res
    })

    //EX-02
    from(this.users).pipe(pluck('job', 'title'), toArray()).subscribe(res => {
      // console.log(res)
      this.data2 = res
    })
  }
}
