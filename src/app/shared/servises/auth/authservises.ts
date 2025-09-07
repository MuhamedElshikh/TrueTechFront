import { Register } from './../../../layout/pages/register/register';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { jwtDecode } from 'jwt-decode';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';
import { FailLogin, singin, successLogin } from '../../interfaces/loginInterface';
import { base } from '../../../base/environment';


@Injectable({
  providedIn: 'root'
})
export class Authservises {
  usertoken: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private _HttpClient: HttpClient,
              private _router: Router,
              @Inject(PLATFORM_ID) private platformid: object) 
              {
                if(isPlatformBrowser(platformid))
                {
                  if(localStorage.getItem("usertoken")!=null)
                  {
                    this.decodetoken();
                  }
                }
               }
login(data: singin): Observable<successLogin | FailLogin>
{
  return this._HttpClient.post<successLogin | FailLogin>(`${base.baseurl}api/Auth/login`, data);

}
logout()
{
  if(isPlatformBrowser(this.platformid))
  {
    localStorage.removeItem("usertoken");
    this.usertoken.next(null);
    this._router.navigate(['/login']);
  }
}
  Register(data: Register): Observable<successLogin | FailLogin> {
    return this._HttpClient.post<successLogin | FailLogin>(
      `${base.baseurl}api/Auth/register`,
      data
    );
  }

  decodetoken()
  {
    const token = JSON.stringify(localStorage.getItem('usertoken'));
    const decoded = jwtDecode(token);
    this.usertoken.next(decoded);
  }

}
