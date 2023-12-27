import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //url de la api
  private api = 'https://dummyjson.com/auth';
  //constructor vacio
  constructor(private http: HttpClient) {}
  //para enviar y recibir datos de la api
  postData(data: any): Observable<any> {
    const url = `${this.api}/login`;
    return this.http.post(url, data);
  }
}
