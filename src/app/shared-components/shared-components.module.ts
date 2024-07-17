import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { MapComponent } from './map/map.component';



@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    MapComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedComponentsModule { }
