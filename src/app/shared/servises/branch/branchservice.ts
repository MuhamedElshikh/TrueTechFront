import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { base } from '../../../base/environment';
import { Observable } from 'rxjs';
import { AddBranch, branch, success } from '../../interfaces/BranchInterface';

@Injectable({
  providedIn: 'root'
})
export class Branchservice {
  
  constructor(private _HttpClient: HttpClient) {}
getAllBranches(): Observable<branch[]>
{
  return this._HttpClient.get<branch[]>(`${base.baseurl}api/Branch`);
}
getBranchById(id:string): Observable<AddBranch>
{
return this._HttpClient.get<AddBranch>(`${base.baseurl}api/Branch`);
}
addBranch(data:AddBranch): Observable<success>
{
  return this._HttpClient.post<success>(`${base.baseurl}api/Branch`, data);
}
deleteBranch(id:string): Observable<success>
{
  return this._HttpClient.delete<success>(`${base.baseurl}api/Branch/DeleteBranch/${id}`);
}
updateBranch(id:string, data:AddBranch): Observable<success>
{
  return this._HttpClient.put<success>(`${base.baseurl}api/Branch/UpdateBranch/${id}`, data);
}
}
