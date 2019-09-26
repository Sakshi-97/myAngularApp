import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';
import { Router } from '@angular/router';
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit {
  dishes = [];
  cart = [];
  data: any = [];
  count = 0;
  show = "false";
  quantity = 0;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/dishes").subscribe((res: any) => {
      this.dishes = res;
      console.log("this.dishes", this.dishes);
    });
    this.http.get("http://localhost:3000/cart").subscribe((res: any) => {
      console.log(res);
      this.cart = res;
    });
  }
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

  myFunc(val: any, id) {
    if (val == '+') {
      for (let item of this.dishes) {
        if (item.id == id) {
          this.data = item;
        }
        this.http.post("http://localhost:3000/cart", this.data).subscribe((res: any) => {
          console.log(res);
          this.dishes = res;
        });
      }
    }
  }

}
