import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { profile } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/imp-api.service';

@Component({
  selector: 'app-layout-profile-rest',
  templateUrl: './layout-profile-rest.component.html',
  styleUrls: ['./layout-profile-rest.component.scss']
})
export class LayoutProfileRestComponent implements OnInit {
  userById = null
  userrr = JSON.parse(localStorage.getItem('user'))
  the_amount = null
  selectedImg: File | null = null


  user_profile_form = this.fb.group({
    commercial_record: ["", Validators.required],
    company_name: ["", Validators.required],
    description: ["", Validators.required],
    email: ["", Validators.required],
    health_certification: ["", Validators.required],
    id: ["", Validators.required],
    logo: ["", Validators.required],
    manager_name: ["", Validators.required],
    manager_pic: ["", Validators.required],
    phone: ["", Validators.required],
    restaurant_pic: ["", Validators.required],
    status: ["", Validators.required],
    user_type_id: ["", Validators.required],
  })

  formFile = {
    manager_pic: null,
    restaurant_pic: null,
    logo: null,
    commercial_record: null,
    health_certification: null,
  }


  constructor(private modalService: NgbModal, private spinner: NgxSpinnerService, private apiService: ImpApiService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {


    console.log(this.userrr.user.id);
    console.log(this.the_amount);

    this.show_profile()
    this.git_wallet()
    // this.submit_update()
  }



  selectImg(event: any) {
    this.selectedImg = event.target.files[0]
    console.log(event.target.files[0]);


  }

  openModal(modal) {
    this.modalService.open(modal, { centered: true })

  }




  show_profile() {
    this.spinner.show()
    this.apiService.get(profile.showUser + this.userrr.user.id).subscribe(res => {
      // console.log(  this.userrr);

      this.userById = res.data
      console.log(this.userById);

      // localStorage.getItem.user.id;
      this.spinner.hide();
      // Update_file : BASEURL+'update-user/',

      this.user_profile_form = this.fb.group({
        commercial_record: [this.userById.commercial_record, Validators.required],
        company_name: [this.userById.company_name, Validators.required],
        description: [this.userById.description, Validators.required],
        email: [this.userById.email, Validators.required],
        health_certification: [this.userById.health_certification, Validators.required],
        id: [this.userById.id, Validators.required],
        logo: [this.userById.logo, Validators.required],
        manager_name: [this.userById.manager_name, Validators.required],
        manager_pic: [this.userById.manager_pic, Validators.required],
        phone: [this.userById.phone, Validators.required],
        restaurant_pic: [this.userById.restaurant_pic, Validators.required],
        status: [this.userById.status, Validators.required],
        user_type_id: [this.userById.user_type_id, Validators.required],


      })


    }
      , (error) => {
        this.spinner.hide();

      })
  }

  submit_update() {
    // console.log(this.user_profile_form.value);
    // Update_file
    // console.log(this.user_profile_form.get('productPic').value);


    const body = new FormData();
    var formData = Object.assign({}, this.user_profile_form.value)

    body.append('company_name', formData.company_name);
    body.append('description', formData.description);
    body.append('email', formData.email);
    body.append('id', formData.id);
    body.append('manager_name', formData.manager_name);
    body.append('phone', formData.phone);
    body.append('status', formData.status);
    body.append('user_type_id', formData.user_type_id);

    var formFile = Object.assign({}, this.formFile)

    if (formFile.commercial_record) {
      body.append('commercial_record', formFile.commercial_record[0]);
    }
    if (formFile.health_certification) {
      body.append('health_certification', formFile.health_certification[0]);
    }
    if (formFile.logo) {
      body.append('logo', formFile.logo[0]);
    }
    if (formFile.manager_pic) {
      body.append('manager_pic', formFile.manager_pic[0]);
    }
    if (formFile.restaurant_pic) {
      body.append('restaurant_pic', formFile.restaurant_pic[0]);
    }

    // var formData = Object.assign({}, this.user_profile_form.value)
    // delete formData.manager_pic
    // delete formData.restaurant_pic
    // delete formData.logo
    // delete formData.commercial_record
    // delete formData.health_certification

    this.apiService.post(profile.Update_file , body).subscribe(res => {
      console.log(res);
      this.router.navigate(['apps/rest-home']);

    })






  }

  git_wallet() {
    this.spinner.show()
    this.apiService.get(profile.Show_Wallet).subscribe(res => {
      // console.log(  this.userrr);

      this.the_amount = res.amount

      console.log(this.the_amount);

      // localStorage.getItem.user.id;
      this.spinner.hide();
    })
      , (error) => {
        this.spinner.hide();

      }
  }

  uploadFile(event, object) {
    this.formFile[object] = event.target.files;
  }



}

