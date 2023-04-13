import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilitService } from 'src/app/appService/design-utilit.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {
  obsMsg: any
  obsMsg1: any
  constructor(private _designUtility: DesignUtilitService) { }

  ngOnInit(): void {
    //OF
    const Obs1 = of('Anup', 'Shekhar', 'Sharma');
    Obs1.subscribe(res => {
      // console.log(res)
      this._designUtility.print(res, 'elContainer')
    })

    const Obs2 = of({ a: 'Anup', b: 'Shekhar', c: 'Sharma' });
    Obs2.subscribe(res => {
      this.obsMsg = res;
      console.log("obsMsg=>", res)
      // this._designUtility.print(res, 'elContainer2')
    })

    //From-Array
    const Obs3 = from(['Drashti', 'Mansi', 'Hetvi']);
    Obs3.subscribe(res => {
      this.obsMsg1 = res;
      // console.log("obsMsg=>", res)
      this._designUtility.print(res, 'elContainer3')
    })

    //From Promise
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve("Promise Resolved")
      }, 3000);
    })
    promise.then(res => {
      console.log(res)
    })

    //convert promise into observable
    const Obs4 = from(promise);
    Obs4.subscribe(res => {
      console.log("from Promise=>", res)
      this._designUtility.print(res, 'elContainer4')
    })

     //From String
    const Obs5 = from("Welcome to VNSGU");
    Obs5.subscribe(res => {
      console.log("from String=>", res)
      this._designUtility.print(res, 'elContainer5')
    })
  }
}
