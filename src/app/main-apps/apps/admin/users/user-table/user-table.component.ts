import { log } from 'util';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { users } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  status_value = ''
  usersData = null
  usersData_2 = null
  userById = null


  constructor(private modalService: NgbModal, private spinner: NgxSpinnerService, private apiService: ImpApiService) {


  }

  ngOnInit(): void {

    this.gitAllUsers()

  }

  openModal(modal, data) {
    this.spinner.show();
    this.modalService.open(modal, { size: 'xl' })

    this.apiService.get(users.showUser + data.id).subscribe(res => {
      this.userById = res.data
      console.log(this.userById);
      this.spinner.hide();
    }, (error) => {
      this.spinner.hide();
    })

  }


  gitAllUsers() {
    this.spinner.show()
    this.apiService.get(users.allUsers).subscribe(res => {
      this.usersData = res.data
      this.usersData_2 = res.data
      this.spinner.hide();

    }, (error) => {
      this.spinner.hide();

    })
  }

  activeUser(user) {
    this.spinner.show()
    this.apiService.post(users.activeUser + user.id, null).subscribe(res => {
      this.spinner.hide();
      this.gitAllUsers();

    }, (error) => {
      this.spinner.hide();

    })
  }




  filter_by_user(chose) {
    this.spinner.show()

    this.status_value = chose

    if (this.status_value == "") {
      this.usersData = this.usersData_2
    }

    if (this.status_value == "2") {
      this.usersData = this.usersData_2
      this.usersData = this.usersData.filter(res => res.user_type_id == this.status_value)
    }
    if (this.status_value == "1") {
      this.usersData = this.usersData_2
      this.usersData = this.usersData.filter(res => res.user_type_id == this.status_value)
    }

    this.spinner.hide();

  }


}
