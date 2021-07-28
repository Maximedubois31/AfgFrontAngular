import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';


import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


//URL api
const API_URL = environment.apiUrl;

@Injectable({
    providedIn: 'root'
  })
export class ProductApiService {

    constructor(private http: HttpClient) { }

    //Get all products
    getProducts(): Observable<Product[]> {
    
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.get<Product[]>(API_URL + '/products', { headers }).pipe( catchError(this.handleError));
    }

    getProduct(productId: Number): Observable<Product> {
    
      const headers = new HttpHeaders().set("Content-Type", "application/json");
  
      return this.http.get<Product>(API_URL + '/product/details/' + productId, { headers }).pipe( catchError(this.handleError));
    }

    deleteProduct(productId: Number): Observable<any> {
      const headers = new HttpHeaders().set("Content-Type", "application/json");

      return this.http.delete(API_URL + '/product/delete/' + productId, { headers }).pipe( catchError(this.handleError));
    }

    updateProduct(product : Product): Observable<any> {

      const headers = new HttpHeaders().set("Content-Type", "application/json");
  
      return this.http.put<Product>(API_URL + '/product/edit', product, { headers }).pipe( catchError(this.handleError));
    }
    

    private handleError(error: Response | any) {
      console.log("error");
      return throwError(error);
    }
}