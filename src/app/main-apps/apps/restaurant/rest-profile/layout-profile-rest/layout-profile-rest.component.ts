import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-layout-profile-rest',
  templateUrl: './layout-profile-rest.component.html',
  styleUrls: ['./layout-profile-rest.component.scss']
})
export class LayoutProfileRestComponent implements OnInit {

  constructor(private modalService: NgbModal) { }
the_amount=600;
  ngOnInit(): void {
  }

  openModal(modal) {
    this.modalService.open(modal, { centered: true })

}
// git_amount(the_amount){
//   if (the_amount >= 1) {

// }

// }
}
