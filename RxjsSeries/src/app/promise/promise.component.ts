import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  constructor() { }
  promiseVal: any;
  DellAvailable() {
    return false;
  }

  HpAvailable() {
    return false;
  }

  dell = {
    brand: 'Dell',
    hardDisk: '2 TB',
    color: 'Black'
  }

  hp = {
    brand: 'Hp',
    hardDisk: '2 TB',
    color: 'Silver'
  }

  notAvil = {
    breand: 'Not Available',
    status: 'Failed'
  }

  ngOnInit(): void {
    let buyLaptop = new Promise((resolve, reject) => {
      // reject("Promise is reject")
      if (this.DellAvailable()) {
        setTimeout(() => {
          resolve(this.dell)
        }, 3000)

      } else if (this.HpAvailable()) {
        setTimeout(() => {
          resolve(this.hp)
        }, 3000)
      } else {
        reject(this.notAvil)
      }
    })

    buyLaptop.then(res => {
      console.log("Then code=>", res)
      this.promiseVal = res;
    }).catch(res => {
      console.log("Then code=>", res)
      this.promiseVal = res;
    })
  }

  // myFunction(){
  //   console.log("hello")
  // }


}
