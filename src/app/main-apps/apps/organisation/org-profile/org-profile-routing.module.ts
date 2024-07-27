import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrgProfileLayoutComponent } from './org-profile-layout/org-profile-layout.component';

const routes: Routes = [

  {
    path: '',
    component: OrgProfileLayoutComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrgProfileRoutingModule { }
