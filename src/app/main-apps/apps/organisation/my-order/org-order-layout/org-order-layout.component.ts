import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-org-order-layout',
  templateUrl: './org-order-layout.component.html',
  styleUrls: ['./org-order-layout.component.scss']
})
export class OrgOrderLayoutComponent implements OnInit {
  state1 = true
  state2 = false
  state3 = false
  state4 = false
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
