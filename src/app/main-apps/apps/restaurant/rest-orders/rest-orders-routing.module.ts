import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentOrderComponent } from './current-order/current-order.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { PreviousOrderComponent } from './previous-order/previous-order.component';


const routes: Routes = [

  {
    path: 'current-order',
    component: CurrentOrderComponent
  },
  {
    path: 'new-order',
    component: NewOrderComponent
  },
  {
    path: 'previous-order',
    component: PreviousOrderComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestOrdersRoutingModule { }
