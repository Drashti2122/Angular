import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  title = 'my-second-project';
  serverCreationStatus = "No server was created!"

  serverName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testsserver 2']

  ngOnInit() {

  }
  OnCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server is created!Name is " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    // console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value;
  }


  // =============
  showSecret = false
  // log: number[] = [];
  log: Date[] = [];
  // cnt = 0
  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date())
  }
}

