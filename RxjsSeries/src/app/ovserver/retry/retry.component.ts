import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {
  constructor(private http: HttpClient) { }

  person: any;
  fetching: boolean = false;
  status = 'No Data';

  ngOnInit(): void { }

  fetchDetails() {
    this.fetching = true;
    this.status = 'Fetching Data..'
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').pipe(
      // retry(2)
      retryWhen(err => err.pipe(
        delay(5000),
        scan((retryCount) => {
          if (retryCount >= 5) {
            throw err;
          } else {
            retryCount = retryCount + 1;
            console.log("retryCount=>" + retryCount);
            this.status = "Retrying Attempt #" + retryCount;;
            return retryCount;
          }
        }, 0)
      ))
    ).subscribe
      (res => {
        console.log(res);
        this.person = res;
        this.status = 'Data Fetched';
        this.fetching = false;
      }, (err) => {
        console.log(err)
        this.status = "Problem Fetching Data";
        this.fetching = false;
      })
  }
}
