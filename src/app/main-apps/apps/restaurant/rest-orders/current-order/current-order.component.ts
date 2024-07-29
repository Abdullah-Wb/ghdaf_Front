import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-order',
  templateUrl: './current-order.component.html',
  styleUrls: ['./current-order.component.scss']
})
export class CurrentOrderComponent implements OnInit {

  state1 = true
  state2 = false
  state3 = false
  state4 = false
  orderstate:any
  constructor() { }

  ngOnInit(): void {
  }
state(orderstate){
  if (orderstate == 2) {

    this.state2 = true
  }

  if (orderstate == 3) {

    this.state3 = true
  }

  if (orderstate == 4) {
    this.state4 = true

  }
}
}
