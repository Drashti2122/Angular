import { DesignUtilitService } from 'src/app/appService/design-utilit.service';
import { Component, OnInit } from '@angular/core';
import { concatMap, delay, from, map, mergeAll, mergeMap, of, switchAll, switchMap } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {
  constructor(private _designUtility: DesignUtilitService) { }

  getData(data: any) {
    return of(data + ' Video Uploaded').pipe(delay(2000))
  }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News'])

    //Ex - 01 | ContactMap
    source.pipe(
      concatMap(res => this.getData(res))
    ).subscribe(res => {
      // res.subscribe(res2 => {
      this._designUtility.print(res, 'elContainer')
      // })
    })

    //Ex - 02 | MergeMap
    source.pipe(
      mergeMap(res => this.getData(res))
    ).subscribe(res2 => {
      this._designUtility.print(res2, 'elContainer2')
    })

    //Ex - 03 | switchMap
    source.pipe(
      switchMap(res => this.getData(res))
    ).subscribe(res2 => {
      this._designUtility.print(res2, 'elContainer3')
    })
  }
}
