import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

export const spinnerinterceptors: HttpInterceptorFn = (req, next) => {
  let spiner = inject(NgxSpinnerService);
  console.log('Spinner Interceptor is active');
  spiner.show()
  return next(req).pipe(finalize(()=>{
    spiner.hide()
  }));
};
