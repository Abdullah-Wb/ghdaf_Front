import { Component, OnInit } from '@angular/core';
import { auth } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { Router } from '@angular/router';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login_form = {
    email: null,
    password: null,
  };
  constructor(private impApiService: ImpApiService, private router: Router, private spinner: NgxSpinnerService) {

  }
  ngOnInit(): void {
    // let user = JSON.parse(localStorage.getItem('user'))// بدون جيسون بارس يعتبرها تكست
    // console.log(user.user.phone)//يعرض الشيءالي تبغاه
  }
  login() {
    this.spinner.show();
    this.impApiService.post(auth.login, this.login_form).subscribe(data => {
      this.spinner.hide();

      localStorage.setItem('user', JSON.stringify(data))
      localStorage.setItem('token', (data.user.token))



      // this.toaster.success('تم تسجيل الدخول');
      this.router.navigate(['main-apps']);//يوديك للمان الي تبغاه بس تحدد الاسم بس بدون باث
      console.log(data)


    },
    )
  }
}
