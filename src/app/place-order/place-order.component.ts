import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';
import { Router } from '@angular/router';
// import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';
import * as _ from "underscore";


@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit {
  dishes = [];
  cart = [];
  data: any = [];
  order = [];
  orderNumber = 0;
  quantity = 0;
  showButton = false;
  address: string;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/dishes").subscribe((res: any) => {
      this.dishes = res;
      console.log("this.dishes", this.dishes);
    });
  }

  myFunc(val: any, item) {
    console.log("cart", this.cart);
    let indexFound = _.findIndex(this.cart, { id: item.id });
    console.log("data found", indexFound);

    if (val === '+') {
      if (indexFound >= 0) {
        this.cart[indexFound]['quantity']++;

      }
      else {
        item.quantity++;
        console.log("cart", this.cart);
        this.cart.push(item);
      }
    }
    else if (val === '-') {
      if (indexFound >= 0) {
        this.cart[indexFound]['quantity']--;
        if (this.cart[indexFound]['quantity'] == 0) {
          this.showButton = false;
          this.cart.splice(indexFound, 1);
        }
      }
    }

    console.log("cart", this.cart);
  }

  add(item) {
    //debugger;
    let bill = 0;
    console.log("adding quantity", item.id);
    if (item.id) {
      console.log("in_________if");
      this.showButton = !this.showButton;
      console.log("button___", this.showButton);
      item.quantity += 1;
      this.cart.push(item);
      localStorage.setItem("cart", JSON.stringify(this.cart));
      // this.bill();
      // console.log("claculating bill")
      // bill = (bill + (item.quantity * item.price));
      // console.log("total bill is", bill);
      // return bill;
    }


  }
  bill() {
    console.log("cart", this.cart);
    let bill = 0;
    console.log("calculating bill__________");
    for (let index of this.cart) {
      console.log("price is", index.price);
      bill = (bill + (index.quantity * index.price));
      console.log("total bill is", bill);
    }
    return bill;
  }

  details() {
    this.order = JSON.parse(localStorage.getItem('order')) || [];
    localStorage.setItem("address", this.address);
    this.order.push({address: this.address,
      cart: this.cart
      // , orderNumber: this.order.length+1
    });

    localStorage.setItem("order", JSON.stringify(this.order));
    this.address = '';
  }














  // if (val === '+') {
  //   for (let index of this.dishes) {
  //     if (index.id === id) {

  //       index.quantity += 1;
  //       console.log("quantity", index.quantity);

  //      this.data = index;
  //      console.log("data",this.data);

  //      this.cart.push(this.data);
  //      console.log("cart",this.cart);
  //     }
  //   }
  // }
  // else if(val ==='-'){
  //   for (let item of this.dishes) {
  //     if(item.id === id){
  //       item.quantity-=1;
  //       console.log("quantity",item.quantity);

  //       if(item.quantity<=0){
  //         console.log("quantity low");

  //       }
  //     }
  //   }
  // }



  myFunction(val: any, id) {

    // console.log("in____________myFunction");
    // console.log("value is",val);
    // console.log("id",id)
    // if(val==='+'){

    //   for(let index of this.dishes) {
    //     if(index.id === id) {
    //       console.log("in__________if");
    //       this.count = this.count +1;
    //       //console.log("data", this.data);
    //       index.quantity+=1;
    //       this.data = index;
    //       console.log("data", this.data);
    //index['quantity'] += 1
    // console.log("quantiy is______",index.quantity);
    // // console.log("______",this.cart.indexOf(id));
    // if(index.id != id){
    //     console.log("in________if")
    //     this.http.post("http://localhost:3000/cart", this.data).subscribe((res:any)=>{
    //       console.log(res);
    //       this.dishes = res;
    //     });
    //         index.quantity+=1;
    //   }
    // else{
    //   console.log("in______________else");
    // this.http.put("http://localhost:3000/cart/"+this.data.id, this.data).subscribe((res:any)=>{
    //     console.log(res);
    // this.dishes = res;
    //   });
    // }
    // 
    // else{
    //       // this.http.post("http://localhost:3000/cart", this.data).subscribe((res:any)=>{
    //       //   console.log(res);
    //       //   // this.dishes = res;
    //       // });
    //       //alert("in ");
    //       console.log("loop start", this.cart)
    //       for(let index of this.cart){
    //         console.log("in cart loop")
    //         if(index.id == id){
    //           console.log("in____________Cart", index.id)
    //           index['quantity'] += 1
    //           console.log("quantity______",index.quantity);
    //           console.log("cart",this.cart);
    //           // this.http.post("http://localhost:3000/cart", this.data).subscribe((res:any)=>{
    //           //   console.log(res);
    //           // });
    //         }
    //       }
    //       console.log("loop end")


    // }

    //   }
    // }

    // console.log("cart_____",this.cart)
    // for(let i of this.cart){
    //   console.log("cart array",i);
    //   if(this.cart.indexOf(id)){

    //     i.quantity+=1;
    //   }
    //   else{
    //     this.http.post("http://localhost:3000/cart", this.data).subscribe((res:any)=>{
    //       console.log(res);
    //       // this.dishes = res;
    //     });
    //   }
    // }
    // this.http.post("http://localhost:3000/cart", this.data).subscribe((res:any)=>{
    //   console.log(res);
    //   this.dishes = res;
    // });
    // }
    // else if(val==='-'){
    //   this.count = this.count -1;
    //   console.log("count of dish",this.count);
  }
  // return this.count;
  // }
  // myFunc(val: any, id) {
  //   console.log("in__myfunc");
  //   console.log("val", val);
  //   console.log("id", id);
  //   console.log("this.dishes", this.dishes);    

  //   for (let item of this.dishes) {
  //     console.log("item", item)
  //     if (item.id === id) {
  //       console.log("in__________if");

  //       item.quantity += 1;
  //       console.log("quantity", item.quantity);

  //       let data = item;
  //       // console.log("data",this.data);

  //       for (let item of this.cart) {
  //         console.log("in cart");
  //         if (item.id != id) {
  //           console.log("in________nested___if")
  //           this.http.post("http://localhost:3000/cart", data).subscribe((res: any) => {
  //             console.log(res);
  //             this.dishes = res;
  //           });
  //         }
  //         else {
  //           console.log("in___________else");

  //         }
  //       }
  //     }
  //   }
  // }



}
