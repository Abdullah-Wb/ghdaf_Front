import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { users } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/imp-api.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  arr_tik: any
  usersTic = null
  usersTic_2 = null
  ticById = null

  constructor(private modalService: NgbModal, private spinner: NgxSpinnerService, private apiService: ImpApiService) {
    this.arr_tik = [
      {
        ticket_campny: 'جمعية حفظ النعمة',
        ticket_email: 'ab@ab.com',
        ticket_add: 'تسجيل الدخول',
        ticket_des: 'لا استطيع تسجيل الدخول'
      },
      {
        ticket_campny: 'جمعية حفظ النعمة',
        ticket_email: 'ab@ab.com',
        ticket_add: 'تفعيل الحساب',
        ticket_des: 'حسابي غير مفعل'
      },
    ]
  }

  ngOnInit(): void {

    this.gitAllTickets()
  }

  openModal(modal,data) {
    this.modalService.open(modal, { centered: true })

    this.spinner.show()
    this.apiService.get(users.showTickets + data.id).subscribe(res => {
      this.ticById = res.data

      this.spinner.hide();
    }, (error) => {
      this.spinner.hide();
    })

  }


  gitAllTickets() {
    this.spinner.show()
    this.apiService.get(users.viewTickets).subscribe(res => {
      console.log(res.data);
      this.usersTic = res.data
      this.usersTic_2 = res.data

       this.spinner.hide();

    }, (error) => {
      this.spinner.hide();

    })
  }

}
