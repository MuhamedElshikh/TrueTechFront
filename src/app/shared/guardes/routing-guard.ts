import { CanActivateFn, Router } from '@angular/router';
import { Authservises } from '../servises/auth/authservises';
import { inject } from '@angular/core';


export const routingGuard: CanActivateFn = (route, state) => {
 let _AthuService: Authservises = inject(Authservises)
  let _Router: Router = inject(Router);
  if(_AthuService.usertoken.getValue()!=null){
return true
  }
  _Router.navigate(["/login"])
  return false;
};
