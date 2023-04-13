import { DesignUtilitService } from 'src/app/appService/design-utilit.service';
import { Component, OnInit } from '@angular/core';
import { Subscription, interval, map } from 'rxjs';

@Component({
  selector: 'app-async-project',
  templateUrl: './async-project.component.html',
  styleUrls: ['./async-project.component.scss']
})
export class AsyncProjectComponent implements OnInit {
  constructor(private _designUtility: DesignUtilitService) { }

  //Toggle Properties
  methodInterval: boolean = false;
  intSubscription!: Subscription;

  asyncVideoEmit!: any;
  ngOnInit() {
    this._designUtility.asyncVideoEmit.subscribe(res => {
      this.asyncVideoEmit = res;
    })
  }

  //Video Add Method
  onVideoAdd(video: any) {
    console.log(video.value)
    this._designUtility.asyncVideoEmit.next(video.value);
  }

  //onComplete Method
  onComplete() {
    this._designUtility.asyncVideoEmit.complete();
  }
}
