// src/app/shared/interceptors/auht-interceptor.ts

import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
if(typeof localStorage !='undefined' ){
req = req.clone({
    setHeaders: { Authorization: `Bearer ${localStorage.getItem('usertoken')}`},
  });
}
  
  return next(req);
};