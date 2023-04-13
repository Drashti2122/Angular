import { Component, OnInit } from '@angular/core';
import { DesignUtilitService } from 'src/app/appService/design-utilit.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navOpen: boolean = false;
  exclusive: boolean = false;
  constructor(private _designUtility: DesignUtilitService) { }

  ngOnInit() {
    this._designUtility.exclusive.subscribe(res => {
      this.exclusive = res
    });
  }
}
