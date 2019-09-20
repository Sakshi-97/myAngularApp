import { Component, OnInit } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
dishes= [];
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/dishes").subscribe((res: any) => {
      console.log(res);
      this.dishes = res;
  });

  }
  add(): void{
    this.router.navigate(['/add']);
  }
  delete(userId) {
    
    this.http.delete("http://localhost:3000/dishes/"+userId).subscribe((res: any) => {
      console.log(res);
      
    });

    console.log("delete", userId);
    let index = this.dishes.findIndex((e) => {
    return e.id === userId;
    });
    console.log("Index_________________",index)
    this.dishes.splice(index,1);
    console.log("Comments",this.dishes)
    console.log("deleting"+userId);

  }
  edit(userId){
    console.log("editing", userId)
    this.router.navigate(['/edit', { userId: userId }]);
      
  }
}