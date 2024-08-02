import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrgOrderLayoutComponent } from './org-order-layout/org-order-layout.component';

const routes: Routes = [

  {
    path: 'my-order',
    component: OrgOrderLayoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyOrderRoutingModule { }
