import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { catchError } from 'rxjs/operators';
import { User } from "../models/user.model";
import { throwError } from 'rxjs';

//URL for api
const API_URL = environment.userApiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get<User[]>(API_URL + '/users', { headers }).pipe(catchError(this.handleError));
  }
  getUserById(userId: number): Observable<User> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get<User>(API_URL + '/user/details/' + userId, { headers }).pipe(catchError(this.handleError));
  }
  createUser(user: User): Observable<User> {
    let body = JSON.stringify(user);
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post<User>(API_URL + '/user/new', body, { headers }).pipe(catchError(this.handleError));
  }
  updateUser(user: User): Observable<User> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.put<User>(API_URL + '/user/edit', { headers }).pipe(catchError(this.handleError));
  }
  deleteUser(userId: number): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post(API_URL + '/user/delete/' + userId, { headers }).pipe(catchError(this.handleError));
  }

  private handleError(error: Response | any) {
    return throwError(error);
  }
}
