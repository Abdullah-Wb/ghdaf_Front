import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-users-orders',
  templateUrl: './new-users-orders.component.html',
  styleUrls: ['./new-users-orders.component.scss']
})
export class NewUsersOrdersComponent implements OnInit {
  arr_newOrder: any
  constructor(private modalService: NgbModal) {
    this.arr_newOrder = [
      {
        platform_name: 'البر',
        user_type: 'جمعية',
        admin_name: 'غسان',
        num: '05977387',
        order_status: 'تحت المعالجة ',

      },
      {
        platform_name: 'البر',
        user_type: 'جمعية',
        admin_name: 'غسان',
        num: '05977387',
        order_status: 'مفعل',

      },
      {
        platform_name: 'البر',
        user_type: 'جمعية',
        admin_name: 'غسان',
        num: '05977387',
        order_status: 'مرفوض',

      },
      {
        platform_name: 'البر',
        user_type: 'جمعية',
        admin_name: 'غسان',
        num: '05977387',
        order_status: 'غير مفعل ',

      },
      {
        platform_name: 'البر',
        user_type: 'جمعية',
        admin_name: 'غسان',
        num: '05977387',
        order_status: ' مجمد',

      }

    ] 
  }

  ngOnInit(): void {
  }
  openModal(modal) {
    this.modalService.open(modal, { size: 'xl' })
  }
}
