import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produit } from '../model/produit.model';
import { Utilisateur } from '../model/utilisateur.model';
@Injectable({
  providedIn: 'root'
})
export class ProduitsService {


  private host=environment.host;
  constructor(private httpClient:HttpClient) { }



  getAllProduits():Observable<Produit[]>{
    const auth_token=sessionStorage.getItem("access_token")
    return this.httpClient.get<Produit[]>(`${this.host}produit/all?search=${auth_token}`)
  }


  saveProduit(p:Produit):Observable<Produit>{
    const auth_token=sessionStorage.getItem("access_token")
    return this.httpClient.post<Produit>(`${this.host}produit/save?search=${auth_token}`,p)
  }

  connexion(user:Utilisateur):Observable<Utilisateur>{
    const auth_token=sessionStorage.getItem("access_token")
    return this.httpClient.post<Utilisateur>(`${this.host}user/save?search=${auth_token}`,user)
  }

  getProduit(id:number):Observable<Produit>{
    const auth_token=sessionStorage.getItem("access_token")
    return this.httpClient.get<Produit>(`${this.host}produit/select?search=${auth_token}&id=${id}`)
  }
  getProduitByName(nom:string):Observable<Produit>{
    const auth_token=sessionStorage.getItem("access_token")
    return this.httpClient.get<Produit>(`${this.host}produit/selectedname?search=${auth_token}&nom=${nom}`)
  }
  updateProduit(id:number,produit:Produit):Observable<Produit>{
    const auth_token=sessionStorage.getItem("access_token")
    return this.httpClient.put<Produit>(`${this.host}produit/update?search=${auth_token}&id=${id}`,produit)
  }
}
