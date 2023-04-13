import { Component, OnInit } from '@angular/core';
import { DesignUtilitService } from '../appService/design-utilit.service';
import { interval, map, merge, take } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent implements OnInit {
  constructor(private _DesignUtility: DesignUtilitService) { }

  ngOnInit(): void {
    const sourceTech = interval(1000).pipe(
      map(v => 'Tech Video #' + (v + 1)),
      take(5));
    const sourceComdey = interval(1000).pipe(
      map(v => 'Comdey Video #' + (v + 1)),
      take(3));
    const sourceNews = interval(1000).pipe(
      map(v => 'News Video #' + (v + 1)),
      take(4));


    const FinalObs = merge(sourceTech, sourceComdey, sourceNews)
    FinalObs.subscribe(res => {
      // console.log(res)
      // this.data = res;
      this._DesignUtility.print(res, 'elContainer')
    })
  }
}
