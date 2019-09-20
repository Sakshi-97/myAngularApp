import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private http:HttpClient,private router:Router) {

   }
addForm : FormGroup;
  ngOnInit() {
    console.log("in add component");
  this.addForm = this.formBuilder.group({
    id : [],
    name : [],
    price: []
  });
  }
onSubmit(value:any){
  console.log("onsubmit value", value);
  return this.http.post('http://localhost:3000/dishes',value).subscribe((res)=>{
    console.log(res);
    this.router.navigate(['/menu']);
  })
}
}
