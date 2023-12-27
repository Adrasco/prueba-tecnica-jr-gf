import { CanMatchFn } from '@angular/router';
import { Inject, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanMatchFn = (route, state) => {
  const Service = inject(AuthService);
  return Service.getAuthToken();
};
