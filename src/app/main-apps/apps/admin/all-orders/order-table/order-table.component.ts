import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnInit {
  arr_allOrder: any
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



  }


  ngOnInit(): void {
  }

  openModal(modal) {
    this.modalService.open(modal, { centered: true })
  }
}
