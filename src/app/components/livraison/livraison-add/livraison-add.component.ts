import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Livraison } from 'src/app/model/livraison.model';
import { Produit } from 'src/app/model/produit.model';
import { LivraisonService } from 'src/app/services/livraison.service';
import { ProduitsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-livraison-add',
  templateUrl: './livraison-add.component.html',
  styleUrls: ['./livraison-add.component.css']
})
export class LivraisonAddComponent {

  buttonActive=true
  newconsommation=false
  poidsnet=0;

  produits?:Produit[]
 livraisonFormGroup?:FormGroup
  submitted=false;
  constructor(private fb:FormBuilder,
    private router:Router,
    private livraisonService:LivraisonService
    ,private produitService:ProduitsService){

  }
  ngOnInit(): void {
    this.poidsnet=0.00
    this.tracteur()
    this.extincteur()

  }

  extincteur(){
    this.livraisonFormGroup=this.fb.group(
      {
        //"observation",
        bonlivraison:['',Validators.required],
        nomclient:['',Validators.required],

      telclient:['',Validators.required],

      plaque:['',Validators.required],
      poidstare:[0.00,Validators.required],
      poidsbrute:[0.00,Validators.required],
      poidsnet:[{value:this.poidsnet},Validators.required],


      destination:['',Validators.required],

      produit:['',Validators.required],


      lieuvente:['',Validators.required],

      datecreation:[new Date(),Validators.required]
      }
    );
  }

  onSaveLivraison(){
    this.submitted=true
    if(this.livraisonFormGroup?.invalid){
      return;
    }

    const product:any=this.produits?.filter(p=> (p.nom==this.livraisonFormGroup?.value['produit']))
    this.buttonActive=false
    this.calculPodsNet()
    this.poidsnet=this.livraisonFormGroup?.value['poidsbrute']-this.livraisonFormGroup?.value['poidstare']
    const livraison:Livraison={
      nomclient:this.livraisonFormGroup?.value['nomclient'],

      telclient:this.livraisonFormGroup?.value['telclient'],
     // buttonActive=false;
      plaque:this.livraisonFormGroup?.value['plaque'],
      poidstare:this.livraisonFormGroup?.value['poidstare'],
      poidsbrute:this.livraisonFormGroup?.value['poidsbrute'],
      poidsnet:this.livraisonFormGroup?.value['poidsnet'],


      destination:this.livraisonFormGroup?.value['destination'],

      produit:product[0],

      bonlivraison:this.livraisonFormGroup?.value['bonlivraison'],

      lieuvente:this.livraisonFormGroup?.value['lieuvente'],

      datecreation:new Date()
    }
    console.log(this.livraisonFormGroup?.value)

    this.livraisonService.saveLivraison(this.livraisonFormGroup?.value)
    .subscribe(data=>{
      alert("Livraison Ajoutée avec succès")
      this.extincteur()
      this.router.navigateByUrl('livraisons')
      console.log(data)
     this.buttonActive=true
    })
  }

  tracteur(){
    this.produitService.getAllProduits()
    .subscribe(data=>{
      this.produits=data
    })
  }

  retour(){
    this.router.navigateByUrl("livraisons")
  }

  calculPodsNet(){
    this.poidsnet=0
    if(this.livraisonFormGroup?.value['poidsbrute']-this.livraisonFormGroup?.value['poidstare']<=0){
      this.poidsnet=0
    }
    else {

    this.poidsnet=this.livraisonFormGroup?.value['poidsbrute']-this.livraisonFormGroup?.value['poidstare']
  }

  }

}
