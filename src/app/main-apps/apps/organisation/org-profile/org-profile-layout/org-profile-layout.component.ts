import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-org-profile-layout',
  templateUrl: './org-profile-layout.component.html',
  styleUrls: ['./org-profile-layout.component.scss']
})
export class OrgProfileLayoutComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openModal(modal) {
    this.modalService.open(modal, { centered: true })

}

}
