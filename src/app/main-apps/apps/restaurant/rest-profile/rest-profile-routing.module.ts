import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestProfileModule } from './rest-profile.module';
import { LayoutProfileRestComponent } from './layout-profile-rest/layout-profile-rest.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutProfileRestComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestProfileRoutingModule { }
