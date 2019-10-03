import { Component, OnInit } from '@angular/core';
import { OrderComponent } from '../order/order.component';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  orderData ;
  constructor() { }
  cartData;
  userName;
  orderCount;
  address;
  modalData = {};
  ngOnInit() {
    this.cartData = JSON.parse(localStorage.getItem('cart'));
    console.log("cartData", this.cartData);

    this.orderCount = localStorage.getItem('orderNo');
    console.log("order number", this.orderCount);

    // this.userName =localStorage.getItem('userName');
    // console.log("User Name", this.userName);
   
    this.address = localStorage.getItem('address');
    console.log("User Address", this.address);

    this.orderData = JSON.parse(localStorage.getItem('order'));
    console.log("OrderData", this.orderData);

  }

}
