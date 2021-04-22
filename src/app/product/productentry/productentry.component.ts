import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-productentry',
  templateUrl: './productentry.component.html',   
  styleUrls: ['./productentry.component.css']
})
export class ProductentryComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  productForm=this.fb.group({
    pid:["",[Validators.required,Validators.minLength(3)]],
    name:["",[Validators.required]],
    price:["",[Validators.required]],
    des:["",[Validators.required]],
    qnty:["",[Validators.required]],
    path:["",[Validators.required]]

  })
  add(){
    console.log(this.productForm.value)
  }
  

  ngOnInit(): void {
  }

}
