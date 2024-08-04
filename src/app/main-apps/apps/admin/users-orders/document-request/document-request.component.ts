import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { users } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/imp-api.service';

@Component({
  selector: 'app-document-request',
  templateUrl: './document-request.component.html',
  styleUrls: ['./document-request.component.scss']
})
export class DocumentRequestComponent implements OnInit {
status_value = ''
updateDemount = null
updateDemount_v2 = null

  constructor(private apiService: ImpApiService, private modalService: NgbModal, private toaster: ToastrService, private spinner: NgxSpinnerService,) {


   }

  ngOnInit(): void {
    this.gitAllFile()
  }

  openModal(modal) {
    this.modalService.open(modal, { centered: true})
}

gitAllFile() {
  this.spinner.show()
  this.apiService.get(users.allFile).subscribe(res => {
    this.updateDemount = res.data
    this.updateDemount_v2 = res.data
    this.spinner.hide();

  }, (error) => {
    this.spinner.hide();

  })
}


approveStatus(data){
  this.spinner.show()
  this.apiService.post(users.fileStatus + data.id , {status_id: 2}).subscribe(res => {//تتعدل تصير اذا وافق رقم و اذا رفض رقم
    this.toaster.success('تم قبول الطلب بنجاح')
    this.updateDemount = res.data
    this.spinner.hide();
    this.gitAllFile()
    }, (error) => {
      this.spinner.hide();
      })

}


rejectStatus(data){
  this.spinner.show()
  this.apiService.post(users.fileStatus + data.id , {status_id: 3}).subscribe(res => {//تتعدل تصير اذا وافق رقم و اذا رفض رقم
    this.toaster.success(' تم رفض الطلب بنجاح')
    this.updateDemount = res.data
    this.spinner.hide();
    this.gitAllFile();
    }, (error) => {
      this.spinner.hide();
      })

}

filter_by_type(chose){
  this.status_value = chose

  if(this.status_value !== '' ){
    this.updateDemount = this.updateDemount_v2
    this.updateDemount = this.updateDemount.filter((data)=>{
      return data.file_type_id == this.status_value
    })
  }else{
    this.updateDemount = this.updateDemount_v2
  }

}





}
