import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrgSupportLayoutComponent } from './org-support-layout/org-support-layout.component';

const routes: Routes = [

  {
    path: '',
    component: OrgSupportLayoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrgSupportRoutingModule { }
