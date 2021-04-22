import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductentryComponent } from './productentry/productentry.component';
import { ProductlistComponent } from './productlist/productlist.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    ProductComponent,
    ProductentryComponent,
    ProductlistComponent,

  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  ]
})
export class ProductModule { }
