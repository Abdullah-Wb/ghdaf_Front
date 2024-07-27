import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrgSupportRoutingModule } from './org-support-routing.module';
import { OrgSupportLayoutComponent } from './org-support-layout/org-support-layout.component';


@NgModule({
  declarations: [
    OrgSupportLayoutComponent
  ],
  imports: [
    CommonModule,
    OrgSupportRoutingModule
  ]
})
export class OrgSupportModule { }
