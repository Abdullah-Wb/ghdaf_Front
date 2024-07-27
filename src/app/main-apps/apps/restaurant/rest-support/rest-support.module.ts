import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestSupportRoutingModule } from './rest-support-routing.module';
import { RestSupportLayoutComponent } from './rest-support-layout/rest-support-layout.component';


@NgModule({
  declarations: [
    RestSupportLayoutComponent
  ],
  imports: [
    CommonModule,
    RestSupportRoutingModule
  ]
})
export class RestSupportModule { }
