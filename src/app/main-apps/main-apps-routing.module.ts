import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthCheckGuard } from '../guard/auth-check.guard';

const routes: Routes = [
  //----------------------ADMIN-----------------------------------------------------------
  {
    path: 'users-orders',
    loadChildren: () => import('./apps/admin/users-orders/users-orders.module').then(m => m.UsersOrdersModule)
  },
  {path: 'users',
  loadChildren: () => import('./apps/admin/users/users.module').then(m => m.UsersModule)
},
{path: 'admin-home',
  loadChildren: () => import('./apps/admin/admin-home/admin-home.module').then(m => m.AdminHomeModule)
},

{path: 'admin-maps',
  loadChildren: () => import('./apps/admin/admin-maps/admin-maps.module').then(m => m.AdminMapsModule)
},

{path: 'all-orders',
  loadChildren: () => import('./apps/admin/all-orders/all-orders.module').then(m => m.AllOrdersModule)
},

// ----------------ORGANISATION------------------------------------------------------------

{path: 'my-order',
  loadChildren: () => import('./apps/organisation/my-order/my-order.module').then(m => m.MyOrderModule)
},
{path: 'org-home',canActivate:[AuthCheckGuard],
  loadChildren: () => import('./apps/organisation/org-home/org-home.module').then(m => m.OrgHomeModule)
},
{path: 'org-profile',
  loadChildren: () => import('./apps/organisation/org-profile/org-profile.module').then(m => m.OrgProfileModule)
},
{path: 'org-support',
  loadChildren: () => import('./apps/organisation/org-support/org-support.module').then(m => m.OrgSupportModule)
},




//-------------RESTAURANT-------------------------------------------------------------------
{path: 'rest-home',
  loadChildren: () => import('./apps/restaurant/rest-home/rest-home.module').then(m => m.RestHomeModule)
},
{path: 'rest-orders',
  loadChildren: () => import('./apps/restaurant/rest-orders/rest-orders.module').then(m => m.RestOrdersModule)
},
{path: 'rest-profile',
  loadChildren: () => import('./apps/restaurant/rest-profile/rest-profile.module').then(m => m.RestProfileModule)
},
{path: 'rest-support',
  loadChildren: () => import('./apps/restaurant/rest-support/rest-support.module').then(m => m.RestSupportModule)
},
{path: 'rest-wallet',
  loadChildren: () => import('./apps/restaurant/rest-wallet/rest-wallet.module').then(m => m.RestWalletModule)
}

//-------------------------------------------
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainAppsRoutingModule { }
