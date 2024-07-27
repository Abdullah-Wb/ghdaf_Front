import { Component, OnInit, NgModule } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-org-home-layout',
  templateUrl: './org-home-layout.component.html',
  styleUrls: ['./org-home-layout.component.scss']
})
export class OrgHomeLayoutComponent implements OnInit {
  arr_userOrd:any





  constructor(private modalService: NgbModal) {

    this.arr_userOrd = [
      {
        imge:'',
        name_rest:'البيك',
        amount:'20',
       price: '500',

      },
      {
        imge:'',
        name_rest:'البيك',
        amount:'20',
       price: '500',

      },

      {
        imge:'',
        name_rest:'البيك',
        amount:'20',
       price: '500',

      },

      {
        imge:'',
        name_rest:'البيك',
        amount:'20',
       price: '500',

      },
      {
        imge:'',
        name_rest:'البيك',
        amount:'20',
       price: '500',

      },
      {
        imge:'',
        name_rest:'البيك',
        amount:'20',
       price: '500',

      },
      {
        imge:'',
        name_rest:'البيك',
        amount:'20',
       price: '500',

      },
      {
        imge:'',
        name_rest:'البيك',
        amount:'20',
       price: '500',

      },
    





    ]


   }





  ngOnInit(): void {
  }
openModal(modal) {
    this.modalService.open(modal, { centered: true })

}
}
