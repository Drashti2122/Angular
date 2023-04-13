import { DesignUtilitService } from 'src/app/appService/design-utilit.service';
import { Component, OnInit } from '@angular/core';
import { concat, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent implements OnInit {
  constructor(private _designUtility: DesignUtilitService) { }
  // data!: any;
  ngOnInit(): void {
    const sourceTech = interval(1000).pipe(
      map(v => 'Tech Video #' + v),
      take(5));
    const sourceComdey = interval(1000).pipe(
      map(v => 'Comdey Video #' + v),
      take(3));
    const sourceNews = interval(1000).pipe(
      map(v => 'News Video #' + v),
      take(4));


    const FinalObs = concat(sourceTech, sourceComdey, sourceNews)
    FinalObs.subscribe(res => {
      // console.log(res)
      // this.data = res;
      this._designUtility.print(res, 'elContainer')
    })
  }
}
