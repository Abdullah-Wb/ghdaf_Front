import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestProfileRoutingModule } from './rest-profile-routing.module';
import { LayoutProfileRestComponent } from './layout-profile-rest/layout-profile-rest.component';


@NgModule({
  declarations: [
    LayoutProfileRestComponent
  ],
  imports: [
    CommonModule,
    RestProfileRoutingModule
  ]
})
export class RestProfileModule { }
