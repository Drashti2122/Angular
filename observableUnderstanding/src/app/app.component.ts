import { Subscription } from 'rxjs';
import { UserService } from './user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  private activatedSub: Subscription | any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.activatedSub = this.userService.activatedEmiiter.subscribe(didActivate => {
      this.userActivated = didActivate;
    })
  }

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }
}
