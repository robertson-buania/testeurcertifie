import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Depense } from '../model/depense.model';
@Injectable({
  providedIn: 'root'
})
export class DepenseService {


  private host=environment.host;
  constructor(private httpClient:HttpClient) { }

/*
Depense
*/

  getAllDepense():Observable<Depense[]>{
    const auth_token=sessionStorage.getItem("access_token")
    return this.httpClient.get<Depense[]>(`${this.host}depense/all?search=${auth_token}`)
  }


  saveDepense(depense:Depense):Observable<Depense>{
    const auth_token=sessionStorage.getItem("access_token")
    return this.httpClient.post<Depense>(`${this.host}depense/save?search=${auth_token}`,depense)
  }

  getDepense(id:number):Observable<Depense>{
    const auth_token=sessionStorage.getItem("access_token")
    return this.httpClient.get<Depense>(`${this.host}depense/select?search=${auth_token}&id=${id}`)
  }
  updateDepense(id:number,depense:Depense):Observable<Depense>{
    const auth_token=sessionStorage.getItem("access_token")
    return this.httpClient.put<Depense>(`${this.host}depense/update?search=${auth_token}&id=${id}`,depense)
  }

}
