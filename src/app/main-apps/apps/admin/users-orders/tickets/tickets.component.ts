import { filter } from 'rxjs';
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
  usersTic = null
  usersTic_2 = null
  status_value = null
  ticById = null

  constructor(private modalService: NgbModal, private spinner: NgxSpinnerService, private apiService: ImpApiService) {

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

    this.apiService.post(users.updateTicket + data.id , {status_id : 2}).subscribe(res =>{

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

  filter_by_status(chose){
    this.spinner.show()

    this.status_value = chose

      this.usersTic = this.usersTic_2

    if(this.status_value == '' ){
      this.usersTic = this.usersTic_2
      console.log("gg");
    }
    if(this.status_value == '1'){
      this.usersTic = this.usersTic_2
      this.usersTic = this.usersTic.filter(res => res.status_id == this.status_value)
      console.log(this.usersTic);
    }
    if (this.status_value == '2') {
      this.usersTic = this.usersTic_2
      this.usersTic = this.usersTic.filter(res => res.status_id == this.status_value)
      console.log(this.usersTic_2);
    }
    this.spinner.hide()

  }


}
