import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/model/produit.model';
import { ProduitsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-produit-edit',
  templateUrl: './produit-edit.component.html',
  styleUrls: ['./produit-edit.component.css']
})
export class ProduitEditComponent {
  productFormGroup?:FormGroup
  submitted=false;
  productedId:number
  buttonActive=true
  product?:Produit;
  constructor(private activatedRoute:ActivatedRoute,
    private fb:FormBuilder,
    private productService:ProduitsService,
    private router:Router
    ){
      this.productedId=activatedRoute.snapshot.params['id']
  }
  ngOnInit(): void {

   this.extincteur()
  }

  extincteur(){

    this.productService.getProduit(this.productedId).
    subscribe(data=>{
      this.product=data
      this.productFormGroup=this.fb.group(
        {
          //"observation",
          prix:[this.product?.prix,Validators.required],
          description:[this.product?.description,Validators.required],
          nom:[this.product?.nom,Validators.required]
        }
      );
    })


  }

  onUpdateProduct(){
    this.submitted=true
    if(this.productFormGroup?.invalid){
      return;
    }
    this.buttonActive=false
    this.productService.updateProduit(this.productedId,this.productFormGroup?.value)
    .subscribe(data=>{
      alert("Produit modifié avec succès")
      this.router.navigateByUrl('produits')
      this.buttonActive=true
    })
  }

  retour(){
    this.router.navigateByUrl('produits')
  }
}
