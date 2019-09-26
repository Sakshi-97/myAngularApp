import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
userId: any;
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private http:HttpClient,private router:Router) { }
  editForm: FormGroup;
  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id : [],
      name : [],
      price: []
    });
    this.route.paramMap.subscribe((p) => {
      console.log(p.get('userId'))
      this.userId = p.get('userId'); 
    });
this.getUserDetail();
  }
  
onSubmit(value:any){
  console.log("editing",value);
  return this.http.put<any>(`http://localhost:3000/dishes/${value.id}`, value).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/menu'])
    });
    
}
getUserDetail(){
  this.http.get(`http://localhost:3000/dishes/${this.userId}`, this.userId).subscribe(data => {
    this.editForm.patchValue(data);
   
  })

}
}
