import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrgProfileRoutingModule } from './org-profile-routing.module';
import { OrgProfileLayoutComponent } from './org-profile-layout/org-profile-layout.component';


@NgModule({
  declarations: [
    OrgProfileLayoutComponent
  ],
  imports: [
    CommonModule,
    OrgProfileRoutingModule
  ]
})
export class OrgProfileModule { }
