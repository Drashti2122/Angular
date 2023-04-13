import { Injectable } from "@angular/core";

// @Injectable()
export class LoggingService {
  lastlog: string;

  printLog(message: string) {
    console.log(message);
    this.lastlog = message;
  }
}
