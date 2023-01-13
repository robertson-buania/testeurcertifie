import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Livraison } from '../model/livraison.model';
@Injectable({
  providedIn: 'root'
})
export class LivraisonService {


  private host=environment.host;
  constructor(private httpClient:HttpClient) { }

/*
livraison
*/



  getAllLivraisons():Observable<Livraison[]>{
    const auth_token=sessionStorage.getItem("access_token")
    return this.httpClient.get<Livraison[]>(`${this.host}livraison/all?search=${auth_token}`)
  }


  saveLivraison(livraison:Livraison):Observable<Livraison>{
    const auth_token=sessionStorage.getItem("access_token")
    return this.httpClient.post<Livraison>(`${this.host}livraison/save?search=${auth_token}`,livraison)
  }

  getLivraison(id:number):Observable<Livraison>{
    const auth_token=sessionStorage.getItem("access_token")
    return this.httpClient.get<Livraison>(`${this.host}livraison/select?search=${auth_token}&id=${id}`)
  }


}
