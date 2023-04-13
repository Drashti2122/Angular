import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debouncetime',
  templateUrl: './debouncetime.component.html',
  styleUrls: ['./debouncetime.component.css']
})
export class DebouncetimeComponent implements AfterViewInit {
  @ViewChild('myInput') myInput!: ElementRef;
  reqData!: any;

  @ViewChild('myInput2') myInput2!: ElementRef;
  reqData2!: any;
  constructor(private loadingBar: LoadingBarService) { }


  ngAfterViewInit(): void {
    //Ex-01 debounceTime
    const searchTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(500)
    );
    searchTerm.subscribe(res => {
      this.reqData = res;
      this.loadingBar.start();
      console.log(res)

      setTimeout(() => {
        this.reqData = null;
        this.loadingBar.stop();
      }, 1000)
    })

    //Ex-02 debounceTime
    const searchTerm2 = fromEvent<any>(this.myInput2.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(500),
      distinctUntilChanged()
    );
    searchTerm2.subscribe(res => {
      this.reqData = res;
      this.loadingBar.start();
      console.log(res)

      setTimeout(() => {
        this.reqData = null;
        this.loadingBar.complete();
      }, 1000)
    })

  }
}
