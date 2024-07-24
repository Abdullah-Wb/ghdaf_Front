import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-document-request',
  templateUrl: './document-request.component.html',
  styleUrls: ['./document-request.component.scss']
})
export class DocumentRequestComponent implements OnInit {
arr_userOrd:any
  constructor(private modalService: NgbModal) {

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
        Documents: 'سجل تجاري',
      },


    ]

   }

  ngOnInit(): void {
  }

  openModal(modal) {
    this.modalService.open(modal, { centered: true})

}
}
