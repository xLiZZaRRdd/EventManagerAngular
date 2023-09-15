import { Router, CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { SwaggerApiService } from '../services/swagger-api.service';
import { map } from 'rxjs';

export const connectedGuard: CanActivateFn = () => {
  const router = inject(Router)
  const swaggerService = inject(SwaggerApiService)
 
  return swaggerService.$connectedUser.pipe(map((user) => {
    console.log(user);
    
    if(user){
      console.log("Banane");
      return true;
    }
    else{
      console.log("Billy");
      router.navigateByUrl("account/login")
      return false;
    }
  }))
};
