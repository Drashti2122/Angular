import { DesignUtilitService } from 'src/app/appService/design-utilit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  userName!: string;
  constructor(private _designUtility: DesignUtilitService) {
    this._designUtility.username.subscribe(res => {
      this.userName = res;
    });
  }

  ngOnInit(): void {

  }

  onChange(uname: any) {
    // console.log(uname.value)
    this._designUtility.username.next(uname.value)
  }
}
