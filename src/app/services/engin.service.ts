import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Engin, Engindto } from '../model/engin.model';
@Injectable({
  providedIn: 'root'
})
export class EnginService {


  private host=environment.host;
  constructor(private httpClient:HttpClient) { }

/*
Engin
*/

  getAllEngin():Observable<Engindto[]>{
    const auth_token=sessionStorage.getItem("access_token")
    return this.httpClient.get<Engindto[]>(`${this.host}engin/all?search=${auth_token}`)
  }


  saveEngin(engin:Engin):Observable<Engin>{
    const auth_token=sessionStorage.getItem("access_token")
    return this.httpClient.post<Engin>(`${this.host}engin/save?search=${auth_token}`,engin)
  }

  getEngin(id:number):Observable<Engin>{
    const auth_token=sessionStorage.getItem("access_token")
    return this.httpClient.get<Engin>(`${this.host}engin/select?search=${auth_token}&id=${id}`)
  }
  updateEngin(id:number,engin:Engin):Observable<Engin>{
    const auth_token=sessionStorage.getItem("access_token")
    return this.httpClient.put<Engin>(`${this.host}engin/update?search=${auth_token}&id=${id}`,engin)
  }

}
