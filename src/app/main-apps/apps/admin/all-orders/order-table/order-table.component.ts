import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnInit {
  arr_allOrder: any
  arr_detils: any
  arr_list: any
  select = "تم التوصيل"
  constructor(private modalService: NgbModal) {
    this.arr_allOrder = [
      {
        rest_name: 'البيك',
        total_price: '1005',
        total_quantity: 230,
        Num_products: 22,
        Order_status: 'تم التوصيل',
      },
      {
        rest_name: 'الطازج',
        total_price: '980',
        total_quantity: 230,
        Num_products: 22,
        Order_status: 'منتهي الصلاحية ',
      },
      {
        rest_name: 'كنتاكي',
        total_price: '1205',
        total_quantity: 290,
        Num_products: 12,
        Order_status: 'محذوف',
      }

    ]

//pup-up
    this.arr_detils = [
      {
        ord_name: 'بيتزاء',
        quantity: 10,
        price: '100',
        pord_date: '12/12/2024',
        exp_date: '13/12/2024',
        order_image:"bi bi-images",
      },
      {
        ord_name: 'بيتزاء',
        quantity: 10,
        price: '100',
        pord_date: '12/12/2024',
        exp_date: '13/12/2024',
        order_image:"bi bi-images",
      },
      {
        ord_name: 'بيتزاء',
        quantity: 10,
        price: '100',
        pord_date: '12/12/2024',
        exp_date: '13/12/2024',
        order_image:"bi bi-images",
      },
      {
        ord_name: 'بيتزاء',
        quantity: 10,
        price: '100',
        pord_date: '12/12/2024',
        exp_date: '13/12/2024',
        order_image:"bi bi-images",
      },
      {
        ord_name: 'بيتزاء',
        quantity: 10,
        price: '100',
        pord_date: '12/12/2024',
        exp_date: '13/12/2024',
        order_image:"bi bi-images",
      },
    ]

    this.arr_list = [
      {
        all:'الكل',
        Delivered:'تم التوصيل',
        Deleted:'محذوف',
        Expired:'منتهي الصلاحية ',
      }
    ]


    this.arr_allOrder = this.arr_allOrder.filter((d)=>{
      return d.Order_status == this.select
    })



  }


  ngOnInit(): void {
  }

  openModal(modal) {
    this.modalService.open(modal, { size: 'xl' })
  }
}
