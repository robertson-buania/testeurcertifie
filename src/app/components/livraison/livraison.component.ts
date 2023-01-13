import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Livraison } from 'src/app/model/livraison.model';
import { LivraisonService } from 'src/app/services/livraison.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent {

  poidsnet=0;
  poidstare=0;
  poidsbrute=0;

  poidsnetP=0;
  poidstareP=0;
  poidsbruteP=0;
  livraisons?:Livraison[]
  user:any

  new=false;

current?:Livraison[]
constructor(private livraisonService:LivraisonService,private route:Router){}

  ngOnInit(): void {
//Token

this.checkNew()

    this.livraisonService.getAllLivraisons()
    .subscribe(data=>{
      this.livraisons=data

     this.current= data.filter(d=>((new Date(d.datecreation).getMonth()==new Date().getMonth()) && (new Date(d.datecreation).getFullYear()==new Date().getFullYear())))
     this.current.forEach(element => {
      //console.log(element)
      this.poidsbrute+=element.poidsbrute;
      this.poidstare+=element.poidstare;
      this.poidsnet+=element.poidsnet
     });

     if((new Date().getMonth()-1)==-1){
      this.current= data.filter(d=>((new Date(d.datecreation).getMonth()==11) && (new Date(d.datecreation).getFullYear()==(new Date().getFullYear()-1))))
     this.current.forEach(element => {
      //console.log(element)
      this.poidsbruteP+=element.poidsbrute;
      this.poidstareP+=element.poidstare;
      this.poidsnetP+=element.poidsnet
     });

     }else{
      this.current= data.filter(d=>((new Date(d.datecreation).getMonth()==(new Date().getMonth()-1)) && (new Date(d.datecreation).getFullYear()==(new Date().getFullYear()))))
     this.current.forEach(element => {
      //console.log(element)
      this.poidsbruteP+=element.poidsbrute;
      this.poidstareP+=element.poidstare;
      this.poidsnetP+=element.poidsnet
     });

     }

    })


  }
  newLivraison(){
    this.route.navigateByUrl("newLivraison")
  }

  detailLivraison(id:number){
    this.route.navigateByUrl("detailLivraison/"+id);
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
