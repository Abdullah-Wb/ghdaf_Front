
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { auth } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/imp-api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {

  type = null;
  formData = null;
  submitted_creat = false;

  constructor(private formBuilder: FormBuilder ,private impApiService:ImpApiService,private router:Router) { }

  ngOnInit(): void { }

  selectType(type) {
    if (type == 1) {
      this.formData = this.formBuilder.group({
        manager_name: ['', [Validators.required]],
        email: ['', [Validators.required]],
        password: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        type_id: [1, [Validators.required]],
        company_name: ['', [Validators.required]],
        description: ['', [Validators.required]],
        otp: ['0000', [Validators.required]]




      });

    }
    this.type = type

  }

submit(){

  this.impApiService.post(auth.register, this.formData.value).subscribe(data => {
    console.log(data);
    this.router.navigate(['apps/rest-home']);

  })}

}


// this.submitted_creat=true
// if (this.formData.invalid){
//   return null;
// }
// register
// this.impApiService.post(auth.login, this.loginForm.value).subscribe(data => {
//   console.log(data);
//   this.router.navigate(['apps/admin-dashboard/dashboard-view']);

// }, error => {
//   this.errorMessage =error.message;
// })
// }
