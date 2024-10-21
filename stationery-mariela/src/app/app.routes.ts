import { Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/auth.component';
import { HomeComponent } from './layout/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule) },
    ]
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) }
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
];
