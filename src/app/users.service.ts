import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl: string = 'http://localhost:3000/users';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  //store userdata
  store(data: any): Observable<any> {
    let API_URL = `${this.apiUrl}`;
    return this.http.post(API_URL, data).pipe(
      catchError(this.getError)
    )
  }

  //list userdata
  list() {
    return this.http.get(`${this.apiUrl}`);
  }

  //Update userdata
  update(id: any, data: any): Observable<any> {
    let API_URL = `${this.apiUrl}/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers }).pipe(
      catchError(this.getError)
    )
  }

  //Delete userdata
  delete(id: any): Observable<any> {
    var API_URL = `${this.apiUrl}/${id}`;
    return this.http.delete(API_URL).pipe(
      catchError(this.getError)
    )
  }

  // get API errors
  getError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
       'error');
    }
    return throwError(
      'Something went wrong; please try again later.');
  };
}
