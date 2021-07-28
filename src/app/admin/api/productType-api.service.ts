import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ProductType } from '../models/productType.model';

//URL api
const API_URL = environment.apiUrl;

@Injectable({
    providedIn: 'root'
  })
  export class ProductTypeService {

    constructor(private http: HttpClient) { }

    //Get All product type
    getAllProductType(): Observable<ProductType[]> {

        const headers = new HttpHeaders().set("Content-Type", "application/json");

        return this.http.get<ProductType[]>(API_URL + '/productsTypes', { headers }).pipe( catchError(this.handleError));
    }

    //Get one product type
    getProductType(productTypeId : Number): Observable<ProductType> {

        const headers = new HttpHeaders().set("Content-Type", "application/json");

        return this.http.get<ProductType>(API_URL + '/productType/ + productTypeId', { headers }).pipe( catchError(this.handleError));
    }


    private handleError(error: Response | any) {
        console.log("error");
          return throwError(error);
    }
  }