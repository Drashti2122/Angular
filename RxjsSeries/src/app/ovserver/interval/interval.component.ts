import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { DesignUtilitService } from 'src/app/appService/design-utilit.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {
  obsMsg: any;
  videoSubscription: Subscription | any;
  constructor(private _designUtility: DesignUtilitService) { }
  ngOnInit(): void {
    // const broadCastVideos = interval(2000);
    //timer(delay,interval)
    const broadCastVideos = timer(5000, 1000);

    this.videoSubscription = broadCastVideos.subscribe(res => {
      console.log(res)
      this.obsMsg = 'video' + ' ' + res;
      this._designUtility.print(this.obsMsg, 'elContainer')
      this._designUtility.print(this.obsMsg, 'elContainer2')
      this._designUtility.print(this.obsMsg, 'elContainer3')

      if (res >= 5) {
        this.videoSubscription.unsubscribe();
      }
    })
  }
}
