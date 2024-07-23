import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutHomeRestComponent } from './layout-home-rest/layout-home-rest.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutHomeRestComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestHomeRoutingModule { }
