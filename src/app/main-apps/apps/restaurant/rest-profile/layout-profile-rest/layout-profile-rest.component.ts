import { Component, OnInit } from '@angular/core';
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
 userrr = localStorage.getItem('user')

  constructor(private modalService: NgbModal,private spinner: NgxSpinnerService, private apiService: ImpApiService) { }
the_amount=600;
  ngOnInit(): void {





  }

  openModal(modal) {
    this.modalService.open(modal, { centered: true })

}


show_profile(data){

  this.spinner.show()
  this.apiService.get(profile.showUser + data.id).subscribe(res => {
    // console.log(  this.userrr);

    this.userById = res.data
    console.log(this.userById);

    // localStorage.getItem.user.id;
    this.spinner.hide();
}
, (error) => {
  this.spinner.hide();

})
}

// git_amount(the_amount){
//   if (the_amount >= 1) {

// }

// }
}
