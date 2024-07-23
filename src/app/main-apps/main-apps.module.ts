import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainAppsRoutingModule } from './main-apps-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    // shared-Component
  ],
  imports: [
    CommonModule,
    MainAppsRoutingModule,
    NgbDropdownModule
  ]
})
export class MainAppsModule { }
