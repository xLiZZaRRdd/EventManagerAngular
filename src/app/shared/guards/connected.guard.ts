import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const ConnectedGuard: CanActivateFn = () => {
  const router = inject(Router)
  const authService = inject(AuthService)

  if (authService.aliveToken()){
    return true;
  }
  
  else {
    router.navigateByUrl("account/login")
    return false;
  }
};
