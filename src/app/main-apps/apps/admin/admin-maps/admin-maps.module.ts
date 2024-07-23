import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminMapsRoutingModule } from './admin-maps-routing.module';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    AdminMapsRoutingModule
  ]
})
export class AdminMapsModule { }
