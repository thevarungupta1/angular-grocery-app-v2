import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private ENDPOINTS = {
    CATEGORY_URL: 'http://apolis-grocery.herokuapp.com/api/category',
    SUBCATEGORY_BY_CATID:'http://apolis-grocery.herokuapp.com/api/subcategory/',
    PRODUCTS_BY_CATID: 'http://apolis-grocery.herokuapp.com/api/products/cat/',
    PRODUCT_BY_SUBID: 'http://apolis-grocery.herokuapp.com/api/products/sub/'
  }

  constructor(private http:HttpClient) { }

  getCategory(): Observable<any>{
    return this.http.get<any>(this.ENDPOINTS.CATEGORY_URL)
  }

  getSubCategoryByCatId(catId: number): Observable<any>{
    return this.http.get<any>(`${this.ENDPOINTS.SUBCATEGORY_BY_CATID + catId}`)
  }

  getProductsByCatId(catId: number): Observable<any>{
    return this.http.get<any>(this.ENDPOINTS.PRODUCTS_BY_CATID + catId)
  }

  getProductsBySubId(subId: number): Observable<any>{
    return this.http.get<any>(this.ENDPOINTS.PRODUCT_BY_SUBID + subId)
  }

}
