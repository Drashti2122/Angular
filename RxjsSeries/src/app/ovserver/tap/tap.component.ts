import { Component, OnInit } from '@angular/core';
import { Subscription, interval, map, tap } from 'rxjs';
import { DesignUtilitService } from 'src/app/appService/design-utilit.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {
  myColor: string = '';
  constructor(private _designUtility: DesignUtilitService) { }

  ngOnInit(): void {
    let obsSubscription: Subscription;
    let obsSubscription1: Subscription;
    const source = interval(1000);

    //Ex-01
    const Arr = ['Drashti', 'Mansi', 'Hetvi', 'Krupa', 'Hetal', 'Keval', 'Shreya']

    obsSubscription = source.pipe(
      tap((res) => {
        console.log(res)
        if (res === 4) {
          obsSubscription.unsubscribe();
        }
      }),
      map(res =>
        Arr[res]
      ),
      tap(res =>
        console.log(res)
      )
    ).subscribe(data => {
      // console.log(data);
      this._designUtility.print(data, 'elContainer')
    })

    //Ex-02
    const Colors = ['Red', 'Blue', 'Yellow', 'Green', 'Pink', 'Purple', 'Black']

    obsSubscription1 = source.pipe(
      tap((res) => {
        this.myColor = Colors[res]
        console.log(res)
        if (res == 4) {
          obsSubscription1.unsubscribe();
        }
      }),
      map(res => {
        return Colors[res]
      }))
      .subscribe(data => {
        console.log(data);
        this._designUtility.print(data, 'elContainer1')
      })
  }
}
