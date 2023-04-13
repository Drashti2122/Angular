import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';
import { DesignUtilitService } from '../appService/design-utilit.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMApComponent implements OnInit {
  constructor(private _designUtility: DesignUtilitService) { }

  getData(data: any) {
    return of(data + ' Video Uploaded')
  }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    //Ex - 01 | Map
    source.pipe(
      map(res => this.getData(res))
    ).subscribe(res => {
      res.subscribe(res2 => {
        // console.log(res2)
        this._designUtility.print(res2, 'elContainer')
      })
    })

    //Ex - 02 | Map + MergeAll
    source.pipe(
      map(res => this.getData(res)),
      mergeAll()
    ).subscribe(res => {
      // res.subscribe(res2 => {
      // console.log(res2)
      this._designUtility.print(res, 'elContainer2')
      // })
    })

    //Ex - 03 | Map + MergeMap
    source.pipe(
      mergeMap(res => this.getData(res))
    ).subscribe(res => {
      // res.subscribe(res2 => {
      // console.log(res2)
      this._designUtility.print(res, 'elContainer3')
      // })
    })
  }
}
