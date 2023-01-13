import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Consommationmazout } from 'src/app/model/consommationmazout.model';
import { Depense } from 'src/app/model/depense.model';
import { Livraison } from 'src/app/model/livraison.model';
import { Produit } from 'src/app/model/produit.model';
import { ConsommationMazoutService } from 'src/app/services/consommation.service';
import { DepenseService } from 'src/app/services/depense.service';
import { LivraisonService } from 'src/app/services/livraison.service';
import { ProduitsService } from 'src/app/services/products.service';
import { EventDriverService } from 'src/app/state/event-driver.service';
import { ActionEvent, MkActionTypes } from 'src/app/state/product.state';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-printer',
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.css']
})
export class PrinterComponent {
  new=false


  @Input()
  dateCreation:Date|null=null
  printer=false;

  livraisons?:Livraison[]
  produits:Produit[]=[]
  consommations?:Consommationmazout[]
  totalConsommation=0
  depenses?:Depense[]
  totalDepense=0
  totalvendu=0;
  totalpoids=0

  constructor(private produitService:ProduitsService,
    private eventDriver:EventDriverService,
    private consommationService:ConsommationMazoutService,private depenseService:DepenseService
    ,private livraisonService:LivraisonService,private route:Router){}
//case MkActionTypes.IMPRIMERCOMMANDE:this.imprimer();break
  ngOnInit(): void {

    this.eventDriver.sourceSubjectObservable.subscribe(
      (actionEvent:ActionEvent)=>{
        this.onActionEvent(actionEvent)
      }
      );
      if(this.dateCreation){
        this.intAll(this.dateCreation)
      }
/*

    this.livraisonService.getAllLivraisons()
    .subscribe(data=>{


     this.livraisons= data.filter(d=>((new Date(d.datecreation).getMonth()==new Date().getMonth()) && (new Date(d.datecreation).getDay()==new Date().getDay()) && (new Date(d.datecreation).getFullYear()==new Date().getFullYear())))

     this.livraisons.forEach(
      liv=>{
        this.produitService.getProduitByName(liv.produit)
          .subscribe(prod=>{
            this.produits.push(prod)
           this.totalvendu+=prod.prix*(liv.poidsbrute-liv.poidstare)
          })

          this.totalpoids+=(liv.poidsbrute-liv.poidstare)
          //console.log(this.totalpoids)
     })


    })

    this.depenseService.getAllDepense().subscribe(data=>{
      this.depenses=data.filter(d=>((new Date(d.datecreation).getMonth()==new Date().getMonth()) && (new Date(d.datecreation).getDay()==new Date().getDay()) && (new Date(d.datecreation).getFullYear()==new Date().getFullYear())))
      this.depenses.forEach(dep=>{
        this.totalDepense+=dep.montant
      })
    })


    this.consommationService.getAllConsommationmazout()
    .subscribe(data=>{
     this.consommations=data.filter(d=>((new Date(d.datecreation).getMonth()==new Date().getMonth()) && (new Date(d.datecreation).getDay()==new Date().getDay()) && (new Date(d.datecreation).getFullYear()==new Date().getFullYear())))
     this.consommations.forEach(cons=>{
       this.totalConsommation+=cons.nombrelitre
     })
    }) */
  }

  onActionEvent($event:ActionEvent){
    switch($event.type){
      case MkActionTypes.IMPRIMERCOMMANDE:this.imprimer($event.payload);break

    }
  }

  imprimer(date:Date){
    this.intAll(new Date(date))
  }
  onPrinter(){
    this.printer=true;
    window.print()
  }

  onQuitter(){
    this.eventDriver.publishEvent({
      type:MkActionTypes.PRINTERCOMMANDE
    })
    this.route.navigateByUrl("synthese")
  }
  intAll(dateCre:Date){

    this.livraisonService.getAllLivraisons()
    .subscribe(data=>{


     this.livraisons= data.filter(d=>((new Date(d.datecreation).getMonth()==dateCre.getMonth()) && (new Date(d.datecreation).getDay()==dateCre.getDay()) && (new Date(d.datecreation).getFullYear()==dateCre.getFullYear())))

     this.livraisons.forEach(
      liv=>{
        this.produitService.getProduitByName(liv.produit)
          .subscribe(prod=>{
            this.produits.push(prod)
           this.totalvendu+=prod.prix*(liv.poidsbrute-liv.poidstare)
          })

          this.totalpoids+=(liv.poidsbrute-liv.poidstare)
          //console.log(this.totalpoids)
     })


    })

    this.depenseService.getAllDepense().subscribe(data=>{
      this.depenses=data.filter(d=>((new Date(d.datecreation).getMonth()==dateCre.getMonth()) && (new Date(d.datecreation).getDay()==dateCre.getDay()) && (new Date(d.datecreation).getFullYear()==dateCre.getFullYear())))
      this.depenses.forEach(dep=>{
        this.totalDepense+=dep.montant
      })
    })


    this.consommationService.getAllConsommationmazout()
    .subscribe(data=>{
     this.consommations=data.filter(d=>((new Date(d.datecreation).getMonth()==dateCre.getMonth()) && (new Date(d.datecreation).getDay()==dateCre.getDay()) && (new Date(d.datecreation).getFullYear()==dateCre.getFullYear())))
     this.consommations.forEach(cons=>{
       this.totalConsommation+=cons.nombrelitre
     })
    })
  }

  checkNew(){
    this.new=false
    const dataToken:any=sessionStorage.getItem('access_token')

    var decodedToken:any = jwt_decode(dataToken);
    // console.log(decodedToken)
     decodedToken.roles.forEach((_element:any) => {
      console.log(_element)
      if(_element=="ADMIN"){
        this.new=true
      }
     });
  }

}
