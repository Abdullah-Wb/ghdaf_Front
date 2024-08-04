import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { users } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/imp-api.service';


@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnInit {

  arr_detils: any
  arr_list = null

  status_value = ''
  usersOrder = null
  usersOrder_v2 = null
  orderById = null

  constructor(private apiService: ImpApiService, private modalService: NgbModal, private toaster: ToastrService, private spinner: NgxSpinnerService, ) {



      //pup-up
    this.arr_detils = [
      {
        ord_name: 'بيتزاء',
        quantity: 10,
        price_one: '100',
        price: '100',
        pord_date: '12/12/2024',
        exp_date: '13/12/2024',
        order_image:"bi bi-images",
      },
      {
        ord_name: 'بيتزاء',
        quantity: 10,
        price_one: '100',
        price: '100',
        pord_date: '12/12/2024',
        exp_date: '13/12/2024',
        order_image:"bi bi-images",
      },
         {
        ord_name: 'بيتزاء',
        quantity: 10,
        price_one: '100',
        price: '100',
        pord_date: '12/12/2024',
        exp_date: '13/12/2024',
        order_image:"bi bi-images",
      },

    ]

    this.arr_list = [
      {
        all:'',
        Delivered:'2',
        Deleted:'3',
        Expired:'4',
      }
    ]




  }


  ngOnInit(): void {

    this.getAllOrder()
  }


  openModal(modal , data) {
    this.spinner.show();
    this.modalService.open(modal, { size: 'xl' })

    this.apiService.get(users.singleOrder + data.request_id).subscribe(res =>{
      this.orderById = res.data

      this.spinner.hide()

    }, (error) => {
      this.spinner.hide();

    })
  }


  getAllOrder(){
    this.spinner.show()

    this.apiService.get(users.allOrder).subscribe(res =>{
      this.usersOrder = res.data
      this.usersOrder_v2 = res.data

      this.spinner.hide()

    }, (error) => {
      this.spinner.hide();

    })
  }


  getsingleOrder(user){

    this.spinner.show()
    this.apiService.get(users.allOrder + user.id).subscribe(res =>{
      this.orderById = res

      this.spinner.hide()

    }, (error) => {
      this.spinner.hide();

    })
  }



  filter_by_status(chose){
    this.status_value = chose;

   if(this.status_value !== ''){
    this.usersOrder = this.usersOrder_v2
   this.usersOrder =  this.usersOrder.filter((data)=>{
      return data.status == this.status_value
    })

   }else{
    this.usersOrder = this.usersOrder_v2
   }




  }
}
