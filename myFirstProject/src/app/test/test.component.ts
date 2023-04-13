import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div>
      Welcome {{name}}
    </div>
    <input type="text" bind-disabled="isDisabled" value="Drashti" [id]="myId">
    <input type="text"  value="Drashti" id="{{myId}}" >`,

  styles: [`div{color:red;}`]
})
export class TestComponent implements OnInit {
  public name = "Codevolution";
  public siteUrl = window.location.href;
  public myId = "testId";
  public isDisabled = false;
  constructor() { }
  ngOnInit() { }
  greetUser() {
    return "Hello " + this.name;
  }
}
