import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-list',
  templateUrl: './dash-list.component.html',
  styleUrls: ['./dash-list.component.scss']
})
export class DashListComponent implements OnInit {
  arr_dash:any
  constructor() {
    this.arr_dash =[
      {
        title: 'عدد المستخدمين',
        num: '55',
        icon:"bi bi-people-fill"
      },
      {
        title: 'عدد المستخدمين',
        num: '150',
        icon:"bi bi-people-fill"
      },
      {
        title: 'عدد المستخدمين',
        num: '120',
        icon:"bi bi-people-fill"
      },
      {
        title: 'عدد المستخدمين',
        num: '12',
        icon:"bi bi-people-fill"
      },


    ]
   }

  ngOnInit(): void {
  }

}
