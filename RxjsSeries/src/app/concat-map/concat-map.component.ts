import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map, of } from 'rxjs';
import { DesignUtilitService } from '../appService/design-utilit.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {
  constructor(private _designUtility: DesignUtilitService) { }

  getData(data: any) {
    return of(data + 'Video Uploaded').pipe(delay(2000))
  }
  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    // Ex-01 |Map
    source.pipe(
      map(res => this.getData(res))
    )
      .subscribe(res => {
        res.subscribe(res2 => {
          // console.log(res2)
          this._designUtility.print(res2, 'elContainer')
        })
      })

    // Ex-02 |Map + concatAll
    source.pipe(
      map(res => this.getData(res)),
      concatAll()
    )
      .subscribe(res => {
        // res.subscribe(res2 => {
        // console.log(res2)
        this._designUtility.print(res, 'elContainer2')
        // })
      })

    // Ex-03 | ConcatMap
    source.pipe(
      concatMap(res => this.getData(res)),
    )
      .subscribe(res => {
        // res.subscribe(res2 => {
        // console.log(res2)
        this._designUtility.print(res, 'elContainer3')
        // })
      })
  }
}
