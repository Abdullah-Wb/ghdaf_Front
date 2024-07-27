import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestSupportLayoutComponent } from './rest-support-layout/rest-support-layout.component';

const routes: Routes = [

  {
    path: '',
    component: RestSupportLayoutComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestSupportRoutingModule { }
