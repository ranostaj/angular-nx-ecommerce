import { Route } from '@angular/router';
import { OrdersListComponent } from '@libs/orders/feature/list';

export const remoteRoutes: Route[] = [
  { path: '', component: OrdersListComponent },
];
