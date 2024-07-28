import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-users-orders',
  templateUrl: './new-users-orders.component.html',
  styleUrls: ['./new-users-orders.component.scss']
})
export class NewUsersOrdersComponent implements OnInit {
  arr_newOrder: any
  arr_info: any
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
        platform_name: 'مكة',
        user_type: 'جمعية',
        admin_name: 'غسان',
        num: '05977387',
        order_status: 'غير مفعل ',

      },
      {
        platform_name: 'التقوى',
        user_type: 'جمعية',
        admin_name: 'غسان',
        num: '05977387',
        order_status: ' مجمد',
      }

    ]

    this.arr_info = [
      {
        admin_name:'ALI',
        Platform_name:'كنتاكي',
        Platform_num: '059099122',
        email: 'ab@gmail.com',
        bank: 'S440937738782782',
        admin_image: "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
        plat_image:"https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
        plat_logo: "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
        address: 'البحيرات قبل محطة ساسكو',
        Description: 'مطعم للوجبات السريعه ',
      },

    ]
  }

  ngOnInit(): void {
  }
  openModal(modal) {
    this.modalService.open(modal, { size: 'xl' })
  }
}
