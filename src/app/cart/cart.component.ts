import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { bindCallback } from 'rxjs';

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

bill()
{
  let bill  = 0;
  console.log("calculating bill__________");
  for(let index of this.cart){
  console.log("price is",index.price);
  bill = (bill + index.price);
  console.log("total bill is",bill);
  }
  return bill;
}
}

