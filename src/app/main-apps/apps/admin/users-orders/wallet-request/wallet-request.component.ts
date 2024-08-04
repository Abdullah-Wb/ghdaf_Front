import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { users } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/imp-api.service';

@Component({
  selector: 'app-wallet-request',
  templateUrl: './wallet-request.component.html',
  styleUrls: ['./wallet-request.component.scss']
})
export class WalletRequestComponent implements OnInit {
  arr_wallet: any
  updateWallet = null
  constructor(private apiService: ImpApiService, private modalService: NgbModal, private toaster: ToastrService, private spinner: NgxSpinnerService,) {

  }

  ngOnInit(): void {

    this.gitWalletRequests()
  }

  openModal(modal) {
    this.modalService.open(modal, { centered: true })
  }



  gitWalletRequests() {
    this.spinner.show()
    this.apiService.get(users.walletRequests).subscribe(res => {
      this.updateWallet = res

      this.spinner.hide();

    }, (error) => {
      this.spinner.hide();

    })
  }

  gitWalletApproved(user){
    this.spinner.show()
    this.apiService.post(users.walletUpdate + user.withdrawal_id, {status : 'approved' }).subscribe(res => {
      this.toaster.success('تم قبول الطلب بنجاح')

      this.spinner.hide();
      this.gitWalletRequests();
    }, (error) => {
      this.spinner.hide();

    })
  }

  gitWalletRejected(user){
    this.spinner.show()
    this.apiService.post(users.walletUpdate + user.withdrawal_id, {status : 'rejected'}).subscribe(res => {
      this.toaster.success(' تم رفض الطلب بنجاح')
      this.spinner.hide();
      this.gitWalletRequests();
    }, (error) => {
      this.spinner.hide();

    })
  }



  approve() {
    this.toaster.success('تم قبول الطلب بنجاح')

  }

  reject() {
    this.toaster.success(' تم رفض الطلب بنجاح')

    this.modalService.dismissAll()

  // api
  }
}
