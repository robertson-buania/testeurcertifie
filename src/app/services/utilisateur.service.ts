import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Utilisateur } from '../model/utilisateur.model';
@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {


  private host=environment.host;
  constructor(private httpClient:HttpClient) { }

/*
Utilisateur  -?+XVvm5!RHMk_5
*/
login(user:any):Observable<any>{
 // const auth_token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjpbIkFETUlOIiwiVVNFUiJdLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODYvbG9naW4iLCJleHAiOjE2NzM1MDUwMDd9.Mm_d_Bswid-jI32R1iV0I1l65RenY5stDJoko-BPeWQ"
   const headers = new HttpHeaders({

     'Content-Type': 'application/x-www-form-urlencoded'
   })

   let data=new URLSearchParams()
   data.set("username",user.username)
   data.set("password",user.password)

   //console.log(data.toString())
   return this.httpClient.post<any>("http://localhost:8080/login",data.toString(),{headers:headers} )
 }

}
