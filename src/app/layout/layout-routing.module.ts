import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { MenuComponent } from '../menu/menu.component';
import { OrderComponent } from '../order/order.component';
import { AddComponent } from '../add/add.component';
import { EditComponent } from '../edit/edit.component';
import { CartComponent } from '../cart/cart.component';
import {PlaceOrderComponent} from '../place-order/place-order.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,children: [
        
      { path: 'menu', component: MenuComponent },
      { path: 'order', component: OrderComponent },
      {path: 'add', component:AddComponent},
      {path: 'edit',component:EditComponent},
      {path: 'cart',component:CartComponent},
      {path:'placeOrder',component: PlaceOrderComponent}
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
