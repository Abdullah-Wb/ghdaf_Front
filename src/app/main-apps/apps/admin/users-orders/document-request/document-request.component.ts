import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-document-request',
  templateUrl: './document-request.component.html',
  styleUrls: ['./document-request.component.scss']
})
export class DocumentRequestComponent implements OnInit {
arr_userOrd:any
arr_userOrd_v2:any
status_value = ''

arr_list:any
  constructor(private modalService: NgbModal, private toaster: ToastrService) {

    this.arr_userOrd = [
      {
        Platform_type:'مطعم',
        Platform_name:'البيك',
        Platform_num: '05309011',
        Documents: 'شهادة صحية',
      },
      {
        Platform_type:'جمعية',
        Platform_name:'البر',
        Platform_num: '053449011',
        Documents: 'السجل تجاري',
      },

    ],
    this.arr_userOrd_v2 = this.arr_userOrd

    this.arr_list = [
      {
        all:'الكل',
        bld:'الشهادة الصحية',
        tga:'السجل التجاري',
      },
    ]



   }

  ngOnInit(): void {
  }

  openModal(modal) {
    this.modalService.open(modal, { centered: true})

}

filter_by_type(chose){
  this.status_value = chose
  if(this.status_value !== '' ){
    this.arr_userOrd = this.arr_userOrd_v2
    this.arr_userOrd = this.arr_userOrd.filter((data)=>{
      return data.Documents == this.status_value
    })
  }else{
    this.arr_userOrd = this.arr_userOrd_v2
  }

}

approve() {
  this.toaster.success('تم قبول الطلب بنجاح')

}

reject() {
  this.toaster.error('تم رفض الطلب ')

  this.modalService.dismissAll()

// api
}



}
