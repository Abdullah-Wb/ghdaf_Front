import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-org-view-order',
  templateUrl: './org-view-order.component.html',
  styleUrls: ['./org-view-order.component.scss']
})
export class OrgViewOrderComponent implements OnInit {

  arr_detils: any
  arr_price: any
  constructor() {

    this.arr_detils = [
      {
        ord_name: 'بيتزا ببروني',
        quantity: 10,
        price: '100',
        pord_date: '12/12/2024',
        exp_date: '13/12/2024',
        order_image:"bi bi-images",
      },
      {
        ord_name: 'بيتزا دجاج',
        quantity: 10,
        price: '100',
        pord_date: '12/12/2024',
        exp_date: '13/12/2024',
        order_image:"bi bi-images",
      },
      {
        ord_name: 'بطاطس',
        quantity: 9,
        price: '19',
        pord_date: '12/12/2024',
        exp_date: '13/12/2024',
        order_image:"bi bi-images",
      },
      {
        ord_name: 'مافن',
        quantity: 10,
        price: '20',
        pord_date: '12/12/2024',
        exp_date: '13/12/2024',
        order_image:"bi bi-images",
      },
      {
        ord_name: 'بيتزا جبن',
        quantity: 10,
        price: '90',
        pord_date: '12/12/2024',
        exp_date: '13/12/2024',
        order_image:"bi bi-images",
      },
      {
        ord_name: 'بيتزا جبن',
        quantity: 10,
        price: '90',
        pord_date: '12/12/2024',
        exp_date: '13/12/2024',
        order_image:"bi bi-images",
      },
       {
        ord_name: 'بيتزا جبن',
        quantity: 10,
        price: '90',
        pord_date: '12/12/2024',
        exp_date: '13/12/2024',
        order_image:"bi bi-images",
      },
    ]

    this.arr_price = [
      {
        total_before: '190 ريال',
        delivery_cost:'45 ريال',
        total_after: '235 ريال',

      }
    ]
  }

  ngOnInit(): void {
  }

}
