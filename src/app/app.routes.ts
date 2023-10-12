import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: NxWelcomeComponent,
        pathMatch: 'full',
      },
      {
        path: 'products',
        loadComponent: () => import('products').then((m) => m.ProductsComponent),
      },
      {
        path: 'orders',
        loadComponent: () => import('orders').then((m) => m.OrdersComponent),
      },
]