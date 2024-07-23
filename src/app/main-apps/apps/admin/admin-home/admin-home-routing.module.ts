import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashListComponent } from './dash-list/dash-list.component';

const routes: Routes = [
  {
    path: 'dash-list',
    component:DashListComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminHomeRoutingModule { }
