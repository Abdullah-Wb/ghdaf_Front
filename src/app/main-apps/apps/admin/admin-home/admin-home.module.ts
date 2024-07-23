import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminHomeRoutingModule } from './admin-home-routing.module';
import { DashListComponent } from './dash-list/dash-list.component';


@NgModule({
  declarations: [
    DashListComponent
  ],
  imports: [
    CommonModule,
    AdminHomeRoutingModule
  ]
})
export class AdminHomeModule { }
