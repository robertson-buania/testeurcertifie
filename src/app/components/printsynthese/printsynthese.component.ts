import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
import { MkActionTypes } from 'src/app/state/product.state';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-printsynthese',
  templateUrl: './printsynthese.component.html',
  styleUrls: ['./printsynthese.component.css']
})
export class PrintsyntheseComponent {

  date?:Date
  livraisons?:Livraison[]
  produits:Produit[]=[]
  consommations?:Consommationmazout[]
  totalConsommation=0
  depenses?:Depense[]
  totalDepense=0
  totalvendu=0;
  new=false
  totalpoids=0
  dateCreation=new Date()
  printFormGroup:FormGroup|null=null
  constructor(private produitService:ProduitsService,
    private consommationService:ConsommationMazoutService,private depenseService:DepenseService
    ,private livraisonService:LivraisonService,private route:Router,
    private eventDriver:EventDriverService,private fb:FormBuilder){}

  ngOnInit(): void {

    this.checkNew()
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   this.printFormGroup= this.fb.group(
    {
      dateCreation:[new Date()]
    }
    )

  }

  onPrinter(){
    this.eventDriver.publishEvent({
      type:MkActionTypes.IMPRIMERCOMMANDE,
      payload:this.dateCreation
    })
  }


  imprimerDate(){

    if(this.printFormGroup?.valid)
    {

      this.dateCreation=this.printFormGroup.value["dateCreation"]
      this.intAll(new Date(this.dateCreation))
      this.date=new Date(this.dateCreation)
  }
  }

  intAll(dateCre:Date){
    this.livraisons=[]
    this.totalpoids=0
    this.totalvendu=0
    this.livraisonService.getAllLivraisons()
    .subscribe(data=>{


     this.livraisons= data.filter(d=>((new Date(d.datecreation).getDate()==dateCre.getDate())))

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
      this.depenses=data.filter(d=>((new Date(d.datecreation).getDate()==dateCre.getDate())))
      this.depenses.forEach(dep=>{
        this.totalDepense+=dep.montant
      })
    })


    this.consommationService.getAllConsommationmazout()
    .subscribe(data=>{
     this.consommations=data.filter(d=>((new Date(d.datecreation).getDate()==dateCre.getDate())))
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
