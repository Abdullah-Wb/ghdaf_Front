import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-org-profile-layout',
  templateUrl: './org-profile-layout.component.html',
  styleUrls: ['./org-profile-layout.component.scss']
})

export class OrgProfileLayoutComponent implements OnInit {
  arr_cards:any

  constructor(private modalService: NgbModal) {

  this.arr_cards = [
    {
      card_num:'1111 2222 3333 4444',
      card_name:'ahmed',
      date:'7/12',
     cvv: '123',

    },
    {
      card_num:'1111 2222 3333 4444',
      card_name:'ahmed',
      date:'7/12',
     cvv: '123',

    },
    // {
    //   cards(num, name, date, cv) {
    //     this.card_num = num;
    //     this.card_name = name;
    //     this.date = date;
    //     this.cvv = cv;
    //   }

    // },


  ]
}

  ngOnInit(): void {
  }

  openModal(modal) {
    this.modalService.open(modal, { centered: true })

}

}
