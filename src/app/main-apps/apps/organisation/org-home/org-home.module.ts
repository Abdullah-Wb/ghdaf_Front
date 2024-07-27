import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrgHomeRoutingModule } from './org-home-routing.module';
import { OrgHomeLayoutComponent } from './org-home-layout/org-home-layout.component';
import { OrgViewOrderComponent } from './org-view-order/org-view-order.component';
import { OrgPaymentOrderComponent } from './org-payment-order/org-payment-order.component';


@NgModule({
  declarations: [
    OrgHomeLayoutComponent,
    OrgViewOrderComponent,
    OrgPaymentOrderComponent
  ],
  imports: [
    CommonModule,
    OrgHomeRoutingModule
  ]
})
export class OrgHomeModule { }
