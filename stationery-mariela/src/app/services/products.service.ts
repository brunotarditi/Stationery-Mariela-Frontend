import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productURL = 'http://localhost:8080/api/v1/products/all/pages?'
  constructor(private httpClient: HttpClient) { }

  getProductsByPages(page:number, size:number, order:string, asc:boolean): Observable<any>{
    return this.httpClient.get<any>(this.productURL + `page=${page}&size=${size}&order=${order}&asc=${asc}`);
  }
}
