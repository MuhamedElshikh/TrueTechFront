import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { base } from '../../../base/environment';
import { allproduct, getproduct, productByBranch } from '../../interfaces/productss';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Productservice {

  constructor(private _HttpClient: HttpClient ) { }

  getAllProducts(): Observable<allproduct> {
    return this._HttpClient.get<allproduct>(`${base.baseurl}api/Product`);
  }
  getProductById(id:string , branchId:string): Observable<getproduct> {
    return this._HttpClient.get<getproduct>(`${base.baseurl}api/Product/${id}?branchid=${branchId}`);
  }
  getProductsByBranchId(branchId:string): Observable<productByBranch[]> {
    return this._HttpClient.get<productByBranch[]>(`${base.baseurl}api/product/GetProductsByBranch/${branchId}`);
  }
}
