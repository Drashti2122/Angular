import { DesignUtilitService } from 'src/app/appService/design-utilit.service';
import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, map } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  //Subscription
  sub1!: Subscription;
  sub2!: Subscription;

  //Messages
  msg1!: any;
  msg2!: any;

  constructor(private _designUtilitService: DesignUtilitService) { }
  ngOnInit(): void {
    //Ex-01
    const broadCastVideos = interval(1000)
    this.sub1 = broadCastVideos.pipe(
      map(data => 'Video ' + data)
    ).subscribe(res => {
      // console.log(res)
      this.msg1 = res;
    })

    setTimeout(() => {
      this.sub1.unsubscribe()
    }, 10000)

    //Ex-02
    this.sub2 = broadCastVideos.pipe(map(data => data * 3)).subscribe(res => { console.log(res) })
    setTimeout(() => {
      this.sub2.unsubscribe()
    }, 10000)

    //Ex-03
    const members = from([
      { id: 1, name: 'Drashti' },
      { id: 2, name: 'Krupa' },
      { id: 3, name: 'Dharmil' },
      { id: 4, name: 'Dhruv' },
      { id: 5, name: 'Dhyani' },
      { id: 6, name: 'Hetvi' },
      { id: 7, name: 'Mansi' },
    ]);

    members.pipe(map(data => data.name)).subscribe((res) => { this._designUtilitService.print(res, 'elContainer') })
  }
}
