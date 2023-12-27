import { Injectable } from '@angular/core';
//para enviar datos de forma reactiva o asincrona
import { BehaviorSubject, Observable, of } from 'rxjs';
//para definir el modelo
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //defino la respuesta como User o null
  request:BehaviorSubject<User|null> = new BehaviorSubject<User|null>(null);
  //el token vacio
  token:String|null = localStorage.getItem("token");

  constructor() {}

  //Para enviar el user desde el login hasta el protected-page
  //para ingresar el user
  setUser(user: User): void {
    this.request.next(user);
    //guardo el token
    localStorage.setItem("token",user.token)
  }
  //para ver el user
  getUser(): Observable<User|null> {
    return this.request.asObservable();
  }

  //para el guard
  //para comprovar si se puede redireccionar
  getAuthToken(): Observable<boolean>{
    return of(!!this.token);
  }

}
