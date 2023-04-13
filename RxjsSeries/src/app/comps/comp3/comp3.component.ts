import { DesignUtilitService } from './../../appService/design-utilit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
  userName!: string;
  constructor(private _designUtility: DesignUtilitService) {
    this._designUtility.username.subscribe(res => {
      this.userName = res;
    });
  }

  ngOnInit(): void {

  }

  onChange(uname: any) {
    // console.log(uname.value);
    this._designUtility.username.next(uname.value)
  }
}
