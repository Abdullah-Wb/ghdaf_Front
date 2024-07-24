import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  arr_tik: any
  constructor() {
    this.arr_tik = [
      {
        ticket_add: 'تسجيل الدخول',
        ticket_des: 'لا استطيع تسجيل الدخول'
      },
      {
        ticket_add: 'تفعيل الحساب',
        ticket_des: 'حسابي غير مفعل'
      },
    ]
  }

  ngOnInit(): void {
  }

}
