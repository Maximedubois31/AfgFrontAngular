import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Company } from "../models/company.model";

//URL api
const API_URL = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})
export class CompanyApiService {

    constructor(private http: HttpClient) { }

    //get all companies
    getCompanies(): Observable<Company[]> {

        const headers = new HttpHeaders().set("Content-Type", "application/json");

        return this.http.get<Company[]>(API_URL + '/company', { headers }).pipe(catchError(this.handleError));
        
    }

    getCompany(companyId: Number): Observable<Company> {

        const headers = new HttpHeaders().set("Content-Type", "application/json");

        return this.http.get<Company>(API_URL + '/company/details/' + companyId, { headers }).pipe(catchError(this.handleError));
    }

    deleteCompany(companyId: Number): Observable<any> {
        const headers = new HttpHeaders().set("Content-Type", "application/json");

        return this.http.delete(API_URL + '/company/delete/' + companyId, { headers }).pipe(catchError(this.handleError));
    }

    updateCompany(company: Company): Observable<any> {

        const headers = new HttpHeaders().set("Content-Type", "application/json");

        return this.http.put<Company>(API_URL + '/company/edit', company, { headers }).pipe(catchError(this.handleError));
    }


    private handleError(error: Response | any) {
        console.log("error");
        return throwError(error);
    }
}