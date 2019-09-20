import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/cart").subscribe((res:any)=>{
      console.log(res);
      this.cart = res;
    });
  }

}
