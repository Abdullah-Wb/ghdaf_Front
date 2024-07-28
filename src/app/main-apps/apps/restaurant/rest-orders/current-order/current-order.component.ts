import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-order',
  templateUrl: './current-order.component.html',
  styleUrls: ['./current-order.component.scss']
})
export class CurrentOrderComponent implements OnInit {

  state1 = false
  state2 = true
  state3 = true
  state4 = true
  constructor() { }

  ngOnInit(): void {
  }

}
