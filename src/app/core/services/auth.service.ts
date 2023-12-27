import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  request:BehaviorSubject<User|null> = new BehaviorSubject<User|null>(null);
  token:String|null = localStorage.getItem("token");

  constructor() {}

  setUser(user: User): void {
    this.request.next(user);
    localStorage.setItem("token",user.token)
  }
  getUser(): Observable<User|null> {
    return this.request.asObservable();
  }

  getAuthToken(): Observable<boolean>{
    return of(!!this.token);
  }

}
