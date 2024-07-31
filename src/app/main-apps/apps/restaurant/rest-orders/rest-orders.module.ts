import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestOrdersRoutingModule } from './rest-orders-routing.module';
import { CurrentOrderComponent } from './current-order/current-order.component';
import { PreviousOrderComponent } from './previous-order/previous-order.component';
import { NewOrderComponent } from './new-order/new-order.component';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CurrentOrderComponent,
    PreviousOrderComponent,
    NewOrderComponent
  ],
  imports: [
    CommonModule,
    RestOrdersRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class RestOrdersModule { }
