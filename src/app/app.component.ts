import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventDriverService } from './state/event-driver.service';
import { ActionEvent, MkActionTypes } from './state/product.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mkprod';
  livraison=false
  produit=false;
  enin=false;
  connexionp=true
  consommation=false;
  synthese=true
  depense=false
  dateCreation:Date|null=null
  printer=false
  user:any
  constructor(private eventDriver:EventDriverService,private  router:Router,private httpClient:HttpClient){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.eventDriver.sourceSubjectObservable.subscribe(
      (actionEvent:ActionEvent)=>{
        this.onActionEvent(actionEvent)
      }
      );
  }

  onActionEvent($event:ActionEvent){
    switch($event.type){
      case MkActionTypes.PRINTERCOMMANDE: this.onPrinter();break;
      case MkActionTypes.IMPRIMERCOMMANDE:this.imprimer($event.payload);break
      case MkActionTypes.CONNEXION:this.conn($event.payload);break

    }
  }
  onPrinter(){
    this.printer=false
  }

  imprimer(date:Date){
    this.dateCreation=new Date(date)
    this.printer=true

  }
  actived(item:string){
    if(item=="livraison"){
      this.livraison=true
      this.depense=false
      this.produit=false;
      this.enin=false;
      this.consommation=false;
      this.synthese=false
    }else if(item=="consommation"){
      this.livraison=false
      this.produit=false;
      this.enin=false;
      this.depense=false
      this.synthese=false
      this.consommation=true;
    }
    else if(item=="produit"){
      this.livraison=false
      this.depense=false
      this.produit=true;
      this.synthese=false
      this.enin=false;
      this.consommation=false;
    }
    else if(item=="enin"){
      this.synthese=false
      this.livraison=false
      this.produit=false;
      this.enin=true;
      this.depense=false
      this.consommation=false;
    }
    else if(item=="synthese"){
      this.synthese=true
      this.depense=false
      this.livraison=false
      this.produit=false;
      this.enin=false;
      this.consommation=false;
    }

    else if(item=="depense"){
      this.synthese=false
      this.depense=true
      this.livraison=false
      this.produit=false;
      this.enin=false;
      this.consommation=false;
    }

  }

  conn(pass:any){
    this.connexionp=false
   this.user=pass
   
   this.router.navigateByUrl("synthese")
  }
  deconnexion(){
    this.connexionp=true
    this.router.navigateByUrl("synthese")

    sessionStorage.removeItem("access_token")
    sessionStorage.removeItem("refresh_token")
  }



}
