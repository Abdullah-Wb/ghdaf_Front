import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestHomeRoutingModule } from './rest-home-routing.module';
import { LayoutHomeRestComponent } from './layout-home-rest/layout-home-rest.component';


@NgModule({
  declarations: [
    LayoutHomeRestComponent
  ],
  imports: [
    CommonModule,
    RestHomeRoutingModule
  ]
})
export class RestHomeModule { }
