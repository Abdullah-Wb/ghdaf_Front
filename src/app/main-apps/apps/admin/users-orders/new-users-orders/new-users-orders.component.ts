import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { users } from 'src/app/constant/Routes';

@Component({
  selector: 'app-new-users-orders',
  templateUrl: './new-users-orders.component.html',
  styleUrls: ['./new-users-orders.component.scss']
})
export class NewUsersOrdersComponent implements OnInit {
  arr_newOrder: any
  arr_newOrder_v2: any

  status_value = ''
  newUsersData =null
  newUsersData_v2 =null



  arr_list: any
  arr_info: any
  reason = ""
  toaster: any;
  userById: any;
  constructor(private modalService: NgbModal, private spinner: NgxSpinnerService, private apiService: ImpApiService) {
    this.arr_newOrder = [
      {
        platform_name: 'البر',
        user_type: 'جمعية',
        admin_name: 'غسان',
        num: '05977387',
        order_status: 'تحت المعالجة',
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
        order_status: 'غير مفعل',

      },
      {
        platform_name: 'التقوى',
        user_type: 'جمعية',
        admin_name: 'غسان',
        num: '05977387',
        order_status: 'مجمد',
      },
      {
        platform_name: 'مكة',
        user_type: 'جمعية',
        admin_name: 'غسان',
        num: '05977387',
        order_status: 'غير مفعل',

      },{
        platform_name: 'مكة',
        user_type: 'جمعية',
        admin_name: 'غسان',
        num: '05977387',
        order_status: 'غير مفعل',

      },{
        platform_name: 'مكة',
        user_type: 'جمعية',
        admin_name: 'غسان',
        num: '05977387',
        order_status: 'غير مفعل',

      },

    ]
    this.arr_newOrder_v2 = this.arr_newOrder

    this.arr_info = [
      {
        admin_name: 'ALI',
        Platform_name: 'كنتاكي',
        Platform_num: '059099122',
        email: 'ab@gmail.com',
        bank: 'S440937738782782',
        admin_image: "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
        plat_image: "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
        plat_logo: "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
        address: 'البحيرات قبل محطة ساسكو',
        Description: 'مطعم للوجبات السريعه ',
        reason: '',
      },

    ]

    this.arr_list = [
      {
        all: 'الكل',
        inactive: 'غير مفعل',
        Rejected: 'مرفوض',
        Processing: 'تحت المعالجة',
        Frozen: 'مجمد',
      },
    ]
  }

  ngOnInit(): void {

    this.gitNewUsers()
  }


  openModal(modal , data) {
    this.modalService.open(modal, { size: 'xl' })


    this.apiService.get(users.showUser + data.id).subscribe(res => {
      this.userById = res.data
      // console.log(this.userById);
      this.spinner.hide();
    }, (error) => {
      this.spinner.hide();
    })
  }

  // '?activation'

  gitNewUsers() {
    this.spinner.show()
    this.apiService.get(users.allUsers + '?activation').subscribe(res => {
      this.newUsersData = res.data
      this.newUsersData_v2 = res.data
      this.spinner.hide();

    }, (error) => {
      this.spinner.hide();

    })
  }

  userApproved(user) {
    this.spinner.show()
    this.apiService.post(users.activeUser + user.id , {status_id : 2}).subscribe(res => {
      this.toaster.success('تم الارسال بنجاح')
      this.spinner.hide();
      this.modalService.dismissAll()
      this.gitNewUsers();

    }, (error) => {
      this.spinner.hide();

    })
  }



  approve() {
      this.toaster.success('تم الارسال بنجاح')
      this.modalService.dismissAll()


  }

  reject() {
    if (this.reason == "") {
      this.toaster.warning('أدخل السبب')
      return null
    }

    this.modalService.dismissAll()

    // api
  }

  filter_by_type(chose){
    this.status_value = chose

    if(this.status_value !== ''){
      this.newUsersData = this.newUsersData_v2
      this.newUsersData = this.newUsersData.filter((data) => {
        return data.status_id == this.status_value
      })

    }else{
      this.newUsersData = this.newUsersData_v2
    }
  }


}
