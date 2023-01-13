import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Consommationmazout } from '../model/consommationmazout.model';
import { Mazout } from '../model/mazout.model';
@Injectable({
  providedIn: 'root'
})
export class ConsommationMazoutService {


  private host=environment.host;
  constructor(private httpClient:HttpClient) { }

/*
Consommationmazout
*/

  getAllConsommationmazout():Observable<Consommationmazout[]>{
    const auth_token=sessionStorage.getItem("access_token")
    return this.httpClient.get<Consommationmazout[]>(`${this.host}consommationmazout/all?search=${auth_token}`)
  }


  saveConsommationmazout(consommationmazout:Consommationmazout):Observable<Consommationmazout>{
    const auth_token=sessionStorage.getItem("access_token")
    return this.httpClient.post<Consommationmazout>(`${this.host}consommationmazout/save?search=${auth_token}`,consommationmazout)
  }

  getConsommationmazout(id:number):Observable<Consommationmazout>{
    const auth_token=sessionStorage.getItem("access_token")
    return this.httpClient.get<Consommationmazout>(`${this.host}consommationmazout/select?search=${auth_token}&id=${id}`)
  }


  /**
   *
   * @returns Mazout
   */

  getAllMazout():Observable<Mazout[]>{
    const auth_token=sessionStorage.getItem("access_token")
    return this.httpClient.get<Mazout[]>(`${this.host}mazout/all?search=${auth_token}`)
  }

  updateMazout(id:number,mazout:Mazout):Observable<Mazout>{
    const auth_token=sessionStorage.getItem("access_token")

    return this.httpClient.put<Mazout>(`${this.host}mazout/update?search=${auth_token}&id=${id}`,mazout)
  }

}
