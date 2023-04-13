import { DesignUtilitService } from 'src/app/appService/design-utilit.service';
import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, take, takeLast, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {
  constructor(private _designUtilitService: DesignUtilitService) { }

  randomName = ['Drashti', 'Mansi', 'Hetvi', 'Krisha', 'Priya', 'Kajal']

  ngOnInit(): void {

    const nameSource = from(this.randomName);

    //Ex-01 | Take
    const source = interval(1000);
    let condition1 = timer(6000);
    let condition2 = fromEvent(document, 'click');

    nameSource.pipe(take(4)).subscribe(res => {
      console.log(res);
      this._designUtilitService.print(res, 'elContainer')
    })

    //Ex-02 | TakeLast
    nameSource.pipe(takeLast(4)).subscribe(res => {
      console.log(res);
      this._designUtilitService.print(res, 'elContainer1')
    })

    //Ex-03 | TakeUntil
    source.pipe(map(res => 'Number' + res), takeUntil(condition2)).subscribe(res => {
      console.log(res);
      this._designUtilitService.print(res, 'elContainer2')
    })
  }
}
