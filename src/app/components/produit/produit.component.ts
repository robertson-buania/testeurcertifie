import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/model/produit.model';
import { ProduitsService } from 'src/app/services/products.service';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {

  new=false
  produits?:Produit[]
  constructor(private router:Router,private productService:ProduitsService){}

  ngOnInit(): void {

    this.productService.getAllProduits().subscribe(data=>{
      this.produits=data
    })
    this.checkNew()
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
  editProduct(id:number){
    this.router.navigateByUrl("editProduct/"+id)
  }



  newProduct(){
    this.router.navigateByUrl("newProduct")
  }
}
