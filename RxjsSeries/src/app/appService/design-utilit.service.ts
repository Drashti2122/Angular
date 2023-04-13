import { Injectable, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilitService implements OnInit {
  exclusive = new Subject<boolean>();
  username = new BehaviorSubject<string>('Shreya');
  videoEmit = new ReplaySubject<string>(5, 5000);
  asyncVideoEmit = new AsyncSubject();

  constructor() { }

  ngOnInit(): void { }

  print(val: any, containerId: any) {
    const el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerId)?.appendChild(el);
  }
}
