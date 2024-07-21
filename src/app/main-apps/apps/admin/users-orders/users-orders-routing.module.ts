import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUsersOrdersComponent } from './new-users-orders/new-users-orders.component';
import { DocumentRequestComponent } from './document-request/document-request.component';
import { WalletRequestComponent } from './wallet-request/wallet-request.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  {
    path: 'new-users-orders',
    component: NewUsersOrdersComponent
  },
  {
    path: 'document-request',
    component: DocumentRequestComponent
  },
  {
    path: 'wallet-request',
    component: WalletRequestComponent
  },
  {
    path: 'tickets',
    component: TicketsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersOrdersRoutingModule { }
