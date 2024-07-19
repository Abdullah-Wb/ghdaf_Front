import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUsersOrdersComponent } from './new-users-orders/new-users-orders.component';

const routes: Routes = [
  {
    path: 'new-users-orders',
    component: NewUsersOrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersOrdersRoutingModule { }
