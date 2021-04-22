import { Component, OnInit } from '@angular/core';
import { ItemsService} from  '../items.service';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {


  
  constructor(private pservice:ItemsService) { }
  product_list:any=[]
  ngOnInit(): void {
    
  this.pservice.readProduct().subscribe((data)=>{this.product_list=data})
  }

}
