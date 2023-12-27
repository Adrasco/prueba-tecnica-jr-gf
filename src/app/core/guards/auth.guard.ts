import { CanMatchFn } from '@angular/router';
//para injectar dependencias sin constructor
import { Inject, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanMatchFn = (route, state) => {
  //el servicio para saber si se pued o no redireccionar
  const Service = inject(AuthService);
  return Service.getAuthToken();
};
