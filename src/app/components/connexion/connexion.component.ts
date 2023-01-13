import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, map, Observable, of, startWith, timeout } from 'rxjs';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { EventDriverService } from 'src/app/state/event-driver.service';
import { AppDataState, DataStateEnum, MkActionTypes } from 'src/app/state/product.state';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  spin=false
  connexionFormGroup:FormGroup|null=null
  mes:string |null=null

  userDataInput$:Observable<AppDataState<any>> |null=null;

   readonly DataStateEnum=DataStateEnum;
  constructor(private fb:FormBuilder,
    private utilisateurService:UtilisateurService,
    private router:Router,
    private eventDriver:EventDriverService
    ){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.connexionFormGroup=this.fb.group(
      {
        username:["",Validators.required],
        password:["",Validators.required]
      }
    )
  }


  connexionBack(){
    if(this.connexionFormGroup?.valid){
      this.spin=true
    this.utilisateurService.login(this.connexionFormGroup.value)
     .subscribe(data=>{
      this.mes="Connexion reussi"
      this.spin=false
      var token = data.access_token;
     var decoded:any = jwt_decode(token);

     sessionStorage.setItem("access_token",data.access_token)
     sessionStorage.setItem("refresh_token",data.refresh_token)

    const user={
      username:decoded.sub,
      role:decoded.roles
     }

    this.eventDriver.publishEvent({
      type:MkActionTypes.CONNEXION,
      payload:user
    })


    },
    catchError=>{
      //this.spin=false
      setTimeout(()=>{
        this.spin=false
        if(catchError.status==403){
          this.mes="Nom ou mot de passe non reconnu !"
         }else
         if(catchError.status>=500){
           this.mes="Rédemarrez sur un autre onglet du navigateur ou Réassayez plus tard"
          }
         this.mes="Nom ou mot de passe non reconnu"
      },10000)

    }
    )
      /*this.eventDriver.publishEvent({
        type:MkActionTypes.CONNEXION,
        payload:con
        jwt_decode
      })*/
    }

  }

}
