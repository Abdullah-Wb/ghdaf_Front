import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-wallet-request',
  templateUrl: './wallet-request.component.html',
  styleUrls: ['./wallet-request.component.scss']
})
export class WalletRequestComponent implements OnInit {
  arr_wallet: any
  constructor(private modalService: NgbModal) {
    this.arr_wallet = [
      {
        rest_name: 'البيك',
        wallet_num: 12,
        wallet_balance: 2480,
        num: '055555433',
      },
      {
        rest_name: 'الطازج',
        wallet_num: 19,
        wallet_balance: 2180,
        num: '055555773',
      }

    ]
  }

  ngOnInit(): void {
  }
  openModal(modal) {
    this.modalService.open(modal, { centered: true })
  }
}
