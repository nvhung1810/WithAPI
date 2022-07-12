import { Injectable } from '@angular/core';
// hai cái dưới là 1 service nên cần khai báo vào contructor
import { HttpClient, HttpErrorResponse } from '@angular/common/http';  
import { Observable } from 'rxjs';
import { products } from '../models/products.model';

// import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public url: string = 'http://localhost:3000/posts';

  constructor(
    public _http: HttpClient,

  ) { }

  // getAllProducts(url: string): Observable<products[]> {
  //   return this._http.get(url).map((response: Response) => <products[]>response.json());)
  // }

  getAllProducts(): Observable<products[]>  {
    return this._http.get<products[]>(this.url);
  }
  
  // getProduct(id: number): Observable<products[]>  {
  //   const UrlAPI = `${this.url}/${id}`;
  //   return this._http.get<products[]>(UrlAPI);
  // }

  getProduct(id: number): Observable<products> {
    const UrlAPI = `${this.url}/${id}`;
    return this._http.get<products>(UrlAPI);
  }

  createProduct(product: products): Observable<products> {
    return this._http.post<products>(this.url, product);
  }

  DeleteProduct(id: number): Observable<products> {
    const deleteUrl = `${this.url}/${id}`;
    // return this._http.delete(deleteUrl);
    return this._http.delete<products>(deleteUrl);
  }

  updateProduct(product: products): Observable<products> {
    const updateUrl = `${this.url}/${product.id}`;
    return this._http.put<products>(updateUrl, product);
  }
}
