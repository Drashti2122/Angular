import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilitService } from 'src/app/appService/design-utilit.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit, AfterViewInit {
  constructor(private _designUtility: DesignUtilitService) { }

  @ViewChild('addBtn') addBtn: ElementRef | any;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {
      let countVal = 'video' + count++;
      this._designUtility.print(countVal, 'elContainer')
      this._designUtility.print(countVal, 'elContainer2')
    })
  }

  
}
