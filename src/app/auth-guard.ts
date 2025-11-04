import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Apiservice } from './apiservice';

export const authGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
    if (localStorage.getItem("isvalid") === "true") {
      return true;
    } else {
      router.navigate(['/login']);
      return false;
    }
};
