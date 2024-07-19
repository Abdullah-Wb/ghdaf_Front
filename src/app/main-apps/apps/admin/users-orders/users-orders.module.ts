import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersOrdersRoutingModule } from './users-orders-routing.module';
import { NewUsersOrdersComponent } from './new-users-orders/new-users-orders.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { WalletRequestComponent } from './wallet-request/wallet-request.component';
import { DocumentRequestComponent } from './document-request/document-request.component';
import { TicketsComponent } from './tickets/tickets.component';


@NgModule({
  declarations: [
    NewUsersOrdersComponent,
    WalletRequestComponent,
    DocumentRequestComponent,
    TicketsComponent
  ],
  imports: [
    CommonModule,
    UsersOrdersRoutingModule,
    SharedComponentsModule
  ]
})
export class UsersOrdersModule { }
