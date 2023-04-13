import { DesignUtilitService } from './../appService/design-utilit.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit, OnDestroy {
  username!: string;
  constructor(private _designUtility: DesignUtilitService) {
    this._designUtility.username.subscribe(res => {
      this.username = res;
    });
  }

  ngOnInit(): void {
    this._designUtility.exclusive.next(true);
  }

  ngOnDestroy(): void {
    this._designUtility.exclusive.next(false);
  }
}
