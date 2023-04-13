import { DesignUtilitService } from 'src/app/appService/design-utilit.service';
import { Component, OnInit } from '@angular/core';
import { Subscription, interval, map } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {
  constructor(private _designUtility: DesignUtilitService) { }

  //List Data
  user1List = [
    'Angular 1',
    'Angular 2'
  ];
  user2List: string[] = [];
  user3List: string[] = [];

  //SubscribeModes
  subscribeMode2: boolean = false;
  subscribeMode3: boolean = false;

  //subscriptions
  subscription2!: Subscription;
  subscription3!: Subscription;

  //Toggle Properties
  methodInterval: boolean = false;
  intSubscription!: Subscription;

  ngOnInit() {
    this._designUtility.videoEmit.subscribe(res => {
      console.log(res);
      this.user1List.push(res);
    });
  }

  //Video Add Method
  onVideoAdd(video: any) {
    // console.log(video.value)
    this._designUtility.videoEmit.next(video.value);
  }

  //User2 Subscribe Button
  user2Subscribe() {
    if (this.subscribeMode2) {
      this.subscription2.unsubscribe();
    } else {
      this.subscription2 = this._designUtility.videoEmit.subscribe((res) => {
        this.user2List.push(res);
      })
    }
    this.subscribeMode2 = !this.subscribeMode2;
  }

  //User3 Subscribe Button
  user3Subscribe() {
    if (this.subscribeMode3) {
      this.subscription3.unsubscribe();
    } else {
      this.subscription3 = this._designUtility.videoEmit.subscribe((res) => {
        this.user3List.push(res);
      })
    }
    this.subscribeMode3 = !this.subscribeMode3;
  }

  toggleMethod() {
    const broadCastVideo = interval(1000);

    if (!this.methodInterval) {
      this.intSubscription = broadCastVideo.subscribe(res => {
        this._designUtility.videoEmit.next('video' + res);
      })
    } else {
      this.intSubscription.unsubscribe();
    }

    this.methodInterval = !this.methodInterval;
  }
}
