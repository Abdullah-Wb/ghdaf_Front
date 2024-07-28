import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrgHomeLayoutComponent } from './org-home-layout/org-home-layout.component';
import { OrgViewOrderComponent } from './org-view-order/org-view-order.component';
import { OrgPaymentOrderComponent } from './org-payment-order/org-payment-order.component';

const routes: Routes = [

  {
    path: 'org-home-layout',
    component: OrgHomeLayoutComponent,

  },
  {
    path: 'org-view-order',
    component: OrgViewOrderComponent,

  },
  {
    path: 'org-payment-order',
    component: OrgPaymentOrderComponent,

  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrgHomeRoutingModule { }
