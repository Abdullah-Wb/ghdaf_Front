import { Component, OnInit } from '@angular/core';
import { auth } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { Router } from '@angular/router';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login_form = {
    email: null,
    password: null,
    otp: null,
  };
  constructor(private impApiService: ImpApiService, private router: Router, private spinner: NgxSpinnerService, private modalService: NgbModal, private val : FormBuilder) {

  }
  ngOnInit(): void {
    // let user = JSON.parse(localStorage.getItem('user'))// بدون جيسون بارس يعتبرها تكست
    // console.log(user.user.phone)//يعرض الشيءالي تبغاه
  }
  open_modal(modal) {
    this.modalService.open(modal, { centered: true })
  }
  login() {
    this.spinner.show();
    if (this.login_form.otp.length !== 4) {
      this.spinner.hide();
      return null
    }
    this.impApiService.post(auth.login, this.login_form).subscribe(data => {
      this.spinner.hide();

      localStorage.setItem('user', JSON.stringify(data))
      localStorage.setItem('token', (data.user.token))
      this.modalService.dismissAll()



      if (data.user.user_type_id == 3) {
        this.router.navigate(["main-apps/admin-home/dash-list"]);
      }

      if (data.user.user_type_id == 2) {
        this.router.navigate(["main-apps/org-home/org-home-layout"]);
      }
      if (data.user.user_type_id == 1) {
        this.router.navigate(["main-apps/rest-home"]);
      }



      // // this.toaster.success('تم تسجيل الدخول');
      // this.router.navigate(['main-apps/admin-home/dash-list']);//يوديك للمان الي تبغاه بس تحدد الاسم بس بدون باث
      // console.log(data)


    },
    )
  }

  onOtpChange(otp) {
    this.login_form.otp = otp
  }
}
