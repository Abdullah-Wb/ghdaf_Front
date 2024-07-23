import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllOrdersRoutingModule } from './all-orders-routing.module';
import { OrderTableComponent } from './order-table/order-table.component';


@NgModule({
  declarations: [
    OrderTableComponent
  ],
  imports: [
    CommonModule,
    AllOrdersRoutingModule
  ]
})
export class AllOrdersModule { }
