import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IProduct} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _url:string = "/assets/data/products.json";
  //http://s5e74666f326a3z6pmvkahvg.devcloud.acquia-sites.com/products
  constructor(private http: HttpClient) { }

  getProducts() : Observable<IProduct[]>{
  return this.http.get<IProduct[]>(this._url);


  }
}
