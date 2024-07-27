import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrgHomeLayoutComponent } from './org-home-layout/org-home-layout.component';

const routes: Routes = [

  {
    path: '',
    component: OrgHomeLayoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrgHomeRoutingModule { }
