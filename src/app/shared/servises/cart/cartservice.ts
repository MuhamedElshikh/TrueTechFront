import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { base } from '../../../base/environment';
import { getcart,cart} from '../../interfaces/cartInterface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Cartservice {
    private cartSource = new BehaviorSubject<getcart | null>(null);
    cart$ = this.cartSource.asObservable();

  constructor(private _httpclient: HttpClient) { }
   
  addToCart(data:cart):Observable<getcart>
  {
    return this._httpclient.post<getcart>(`${base.baseurl}api/Cart`,data)

  }
  getcart() :Observable<getcart>
  {
    return this._httpclient.get<getcart>(`${base.baseurl}api/Cart`)

  }
 removeitem(productId: string): Observable<any> {
  return this._httpclient.delete(`${base.baseurl}api/Cart/item/${productId}`);
  
}
  rmovecart() : Observable<any>
  {
   return  this._httpclient.delete<any>(`${base.baseurl}api/Cart`)
  }
  setCart(cart: getcart) {
    this.cartSource.next(cart);
  }
  }
  


