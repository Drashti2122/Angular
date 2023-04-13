import { Component, OnInit } from '@angular/core';
import { DesignUtilitService } from 'src/app/appService/design-utilit.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  userName!: string;
  constructor(private _designUtility: DesignUtilitService) {
    this._designUtility.username.subscribe(res => {
      this.userName = res;
    });
  }

  ngOnInit(): void { }

  onChange(uname: any) {
    console.log(uname.value);
    this._designUtility.username.next(uname.value)
  }
}
