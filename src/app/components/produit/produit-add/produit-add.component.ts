import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { ProduitsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-produit-add',
  templateUrl: './produit-add.component.html',
  styleUrls: ['./produit-add.component.css']
})
export class ProduitAddComponent {

  productFormGroup?:FormGroup
  submitted=false;
  buttonActive=true
  constructor(private fb:FormBuilder,
    private route:Router,private productService:ProduitsService){

  }
  ngOnInit(): void {
   this.extincteur()
  }

  extincteur(){
    this.productFormGroup=this.fb.group(
      {
        //"observation",
        prix:[0.00,Validators.required],
        description:["",Validators.required],
        nom:["",Validators.required]
      }
    );
  }

  onSaveProduct(){
    this.submitted=true
    if(this.productFormGroup?.invalid){
      return;
    }
    this. buttonActive=false;
    this.productService.saveProduit(this.productFormGroup?.value)
    .subscribe(data=>{
      alert("Produit Ajouté avec succès")
      this.extincteur()
      this. buttonActive=true
      this.retour()
    })
  }

  retour(){
    this.route.navigateByUrl("produits")
  }
}
