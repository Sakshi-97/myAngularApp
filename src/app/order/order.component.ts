import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';
import { Router } from '@angular/router';
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
dishes = [];
data: any = [];
count = 0;
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
  this.http.get("http://localhost:3000/dishes").subscribe((res:any)=>{
    console.log(res);
    this.dishes = res;
  });
  }
myFunction(val:any,id){
  
console.log("in____________myFunction");
console.log("value is",val);
console.log("id",id)
if(val==='+'){
  this.count = this.count +1;
  for(let index of this.dishes) {
    if(index.id === id) {
      this.data = index;
      console.log("data", this.data);
    }
  }
  this.http.post("http://localhost:3000/cart", this.data).subscribe((res:any)=>{
    console.log(res);
    // this.dishes = res;
  });
}
else if(val==='-'){
  this.count = this.count -1;
  console.log("count of dish",this.count);
}
if(this.count<0){
  this.http.delete("http://localhost:3000/dishes/"+id).subscribe((res: any) => {
    console.log(res);
    
  });

  console.log("delete", id);
  let index = this.dishes.findIndex((e) => {
  return e.id === id;
  });
  console.log("Index_________________",index)
  this.dishes.splice(index,1);
  console.log("Comments",this.dishes)
  console.log("deleting"+id);
}
}
}
