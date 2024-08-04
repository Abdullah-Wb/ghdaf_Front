import { Component, OnInit, NgModule } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { home_org } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/imp-api.service';

@Component({
  selector: 'app-org-home-layout',
  templateUrl: './org-home-layout.component.html',
  styleUrls: ['./org-home-layout.component.scss']
})
export class OrgHomeLayoutComponent implements OnInit {
  arr_userOrd:any





  constructor(private modalService: NgbModal,private impapiService: ImpApiService) {

    // this.arr_userOrd = [
    //   {
    //     imge:'',
    //     name_rest:'البيك',
    //     amount:'20',
    //    price: '500',

    //   },
    //   {
    //     imge:'',
    //     name_rest:'البيك',
    //     amount:'20',
    //    price: '500',

    //   },

    //   {
    //     imge:'',
    //     name_rest:'البيك',
    //     amount:'20',
    //    price: '500',

    //   },

    //   {
    //     imge:'',
    //     name_rest:'البيك',
    //     amount:'20',
    //    price: '500',

    //   },
    //   {
    //     imge:'',
    //     name_rest:'البيك',
    //     amount:'20',
    //    price: '500',

    //   },
    //   {
    //     imge:'',
    //     name_rest:'البيك',
    //     amount:'20',
    //    price: '500',

    //   },
    //   {
    //     imge:'',
    //     name_rest:'البيك',
    //     amount:'20',
    //    price: '500',

    //   },
    //   {
    //     imge:'',
    //     name_rest:'البيك',
    //     amount:'20',
    //    price: '500',

    //   },






    // ]


   }





  ngOnInit(): void {
    this.git_all_orders()
  }



git_all_orders(){



  // this.spinner.show()
  // this.apiService.get(users.allUsers).subscribe(res => {
  //   console.log(res.data);
  //   this.usersData = res.data
  //   this.usersData_2 = res.data
  //   this.spinner.hide();

  // }, (error) => {
  //   this.spinner.hide();

  // })


    this.impapiService.get(home_org.View_Available_requests).subscribe(res => {

      console.log(res);
      this.arr_userOrd = res.data
      console.log(this.arr_userOrd);

    })


}
openModal(modal) {
  this.modalService.open(modal, { centered: true })

}

}
