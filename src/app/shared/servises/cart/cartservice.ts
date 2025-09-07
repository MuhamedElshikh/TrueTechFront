import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { base } from '../../../base/environment';
import { cart } from '../../interfaces/cartInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Cartservice {
  constructor(private _httpclient: HttpClient) { }
    // getcart(data:cart): Observable<cart>
    // {
    //   return this._httpclient.get<cart>(`${base.baseurl}/api/Cart`,data).subscribe((res) => {
    //     console.log(res);

    //   });
  }


