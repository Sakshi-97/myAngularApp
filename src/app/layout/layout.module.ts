import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { MenuComponent } from '../menu/menu.component';
import { OrderComponent } from '../order/order.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AddComponent } from '../add/add.component';
import { EditComponent } from '../edit/edit.component';
import { CartComponent } from '../cart/cart.component';
import { PlaceOrderComponent } from '../place-order/place-order.component';
import { OrderDetailComponent } from '../order-detail/order-detail.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LayoutComponent, OrderDetailComponent,MenuComponent,OrderComponent,CartComponent,PlaceOrderComponent,NavbarComponent,SidebarComponent,EditComponent,AddComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
  ]
  
})
export class LayoutModule { }
