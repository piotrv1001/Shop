import { OrderHistoryComponent } from './order-history/order-history.component';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
  RouterModule.forChild([
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'cart',
      component: CartComponent
    },
    {
      path: 'account',
      component: AccountComponent
    },
    {
      path: 'orders',
      component: OrderHistoryComponent
    }
  ])
]})
export class PagesRoutingModule { }
