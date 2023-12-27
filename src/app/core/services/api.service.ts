import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api = 'https://dummyjson.com/auth';
  constructor(private http: HttpClient) {}
  postData(data: any): Observable<any> {
    const url = `${this.api}/login`;
    return this.http.post(url, data);
  }
}
