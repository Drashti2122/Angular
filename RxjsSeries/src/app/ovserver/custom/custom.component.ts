import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilitService } from 'src/app/appService/design-utilit.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit, OnDestroy {
  techStatus: any;
  techStatus2: any;
  names: any;
  nameStatus: any;
  subs2!: Subscription;
  constructor(private _designUtility: DesignUtilitService) { }

  ngOnInit(): void {
    //Ex-01 (Manual)
    const cusObs1 = Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next('Angular')
      }, 1000)
      setTimeout(() => {
        observer.next('React')
      }, 2000)
      setTimeout(() => {
        observer.next('WordPress')
        observer.complete();
      }, 2000)
      setTimeout(() => {
        observer.next('.NET')
      }, 3000)
      setTimeout(() => {
        observer.next('PHP')
      }, 2000)
      // observer.error(new Error('Limit Exceed'));
      // observer.error();
      // observer.complete();
    })

    cusObs1.subscribe((res: any) => {
      // console.log(res)
      this._designUtility.print(res, 'elContainer')
    }, () => {
      this.techStatus = 'error';
    }, () => {
      this.techStatus = 'completed';
    })

    //subscribe(data,error,completion)


    //Ex-02(Custome Interval)
    const Arr2 = ['Angular', 'React', 'WordPress', 'Node', '.NET', 'Php']
    const cusObs2 = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(Arr2[count]);
        count++;
        if (count >= 4) {
          observer.error("Error Emiit");

        }

        if (count >= 3) {
          observer.complete()
        }
      }, 1000)
    })

    this.subs2 = cusObs2.subscribe((res: any) => {
      // console.log(res)
      this._designUtility.print(res, 'elContainer2')
    }, () => {
      this.techStatus2 = 'error';
    }, () => {
      this.techStatus2 = 'completed';
    })

    //Ex-02(Custome Interval)
    const Arr3 = ['Angular', 'React', 'WordPress', 'Node', '.NET', 'Php']
    const cusObs3 = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(Arr3[count]);
        count++;
        if (count >= 4) {
          observer.error("Error Emiit");
        }

        if (count >= 5) {
          observer.complete()
        }
      }, 1000)
    })

    cusObs3.subscribe((res: any) => {
      // console.log(res)
      this.names = res;
    }, () => {
      this.nameStatus = "error";
    }, () => {
      this.nameStatus = "completed";
    }
    )
  }

  ngOnDestroy() {
    this.subs2.unsubscribe();
  }
}



