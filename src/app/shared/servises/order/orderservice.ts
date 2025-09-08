import { getorder } from './../../interfaces/orderinterface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { creatorder } from '../../interfaces/orderinterface';
import { base } from '../../../base/environment';

@Injectable({
  providedIn: 'root'
})
export class Orderservice {

  constructor( private _httpclient: HttpClient){}
  
  createorder(data:creatorder):Observable<getorder>{
    return this._httpclient.post<getorder>(`${base.baseurl}api/Orders/create`,data)
  }
  getorderforuser():Observable<getorder[]>
  {
    return this._httpclient.get<getorder[]>(`${base.baseurl}api/Orders`)
  }
}
