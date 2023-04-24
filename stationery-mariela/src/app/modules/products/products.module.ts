import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { PaginationComponent } from 'src/app/shared/components/pagination/pagination.component';


@NgModule({
  declarations: [
    ProductsComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
