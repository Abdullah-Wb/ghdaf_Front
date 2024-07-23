import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
arr_userTable:any
  constructor() {

    this.arr_userTable = [
      {
        user_type:'جمعية',
        platform_name:'البر',
        admin_name:'غسان',
        num:'05977387',
      },
      {
        user_type:'مطعم',
        platform_name:'البيك',
        admin_name:'فيصل',
        num:'058734387',
      },

    ]
  }

  ngOnInit(): void {
  }

}
