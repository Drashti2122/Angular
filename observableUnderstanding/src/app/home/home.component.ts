import { Component, OnDestroy, OnInit } from '@angular/core';

import { ErrorObserver, Observable, Observer, Subscription, interval } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription | undefined;
  constructor() { }

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count)
    // })
    const customIntervalObservable = Observable.create((observer: Observer<number>) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count == 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater than 3!'))
        }
        count++;
      }, 1000)
    });

    // customIntervalObservable.pipe(map((data: number) => {
    //   return "Round: " + (data + 1);
    // }));

    // this.firstObsSubscription = customIntervalObservable.subscribe((data: number) => {
    //   console.log("Round: " + (data + 1));
    // }, (error: any) => {
    //   console.log(error);
    //   alert(error.message);
    // }, () => {
    //   console.log('Completed!')
    // });
    this.firstObsSubscription = customIntervalObservable.pipe(filter((data: number) => {
      return data > 0
    }), map((data: number) => {
      return "Round: " + (data + 1);
    })).subscribe((data: number) => {
      console.log(data);
    }, (error: any) => {
      console.log(error);
      alert(error.message);
    }, () => {
      console.log('Completed!')
    });
  }

  ngOnDestroy(): void {
    this.firstObsSubscription?.unsubscribe();
  }

}
