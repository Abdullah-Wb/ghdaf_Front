import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  arr_userTable: any
  arr_info: any
  constructor(private modalService: NgbModal) {

    this.arr_userTable = [
      {
        user_type: 'جمعية',
        platform_name: 'البر',
        admin_name: 'غسان',
        num: '05977387',
      },
      {
        user_type: 'مطعم',
        platform_name: 'البيك',
        admin_name: 'فيصل',
        num: '058734387',
      },

    ]

    this.arr_info = [
      {
        admin_name:'ALI',
        Platform_name:'البر',
        Platform_num: '059099122',
        email: 'ab@gmail.com',
        bank: 'S440937738782782',
        admin_image: "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
        plat_image:"https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
        plat_logo: "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
        address: 'البحيرات قبل محطة ساسكو',
        Description: 'جمعيه خيرية ..................... ',
      },

    ]

  }

  ngOnInit(): void {
  }

  openModal(modal) {
    this.modalService.open(modal, { size: 'xl'})
  }
}
