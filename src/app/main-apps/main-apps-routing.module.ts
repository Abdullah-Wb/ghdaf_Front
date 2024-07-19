import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users-orders',
    loadChildren: () => import('./apps/admin/users-orders/users-orders.module').then(m => m.UsersOrdersModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainAppsRoutingModule { }
