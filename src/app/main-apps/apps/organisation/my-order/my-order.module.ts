import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyOrderRoutingModule } from './my-order-routing.module';
import { OrgOrderLayoutComponent } from './org-order-layout/org-order-layout.component';


@NgModule({
  declarations: [
    OrgOrderLayoutComponent
  ],
  imports: [
    CommonModule,
    MyOrderRoutingModule
  ]
})
export class MyOrderModule { }
