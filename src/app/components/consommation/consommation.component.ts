import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Consommationmazout } from 'src/app/model/consommationmazout.model';
import { Engin } from 'src/app/model/engin.model';
import { ConsommationMazoutService } from 'src/app/services/consommation.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-consommation',
  templateUrl: './consommation.component.html',
  styleUrls: ['./consommation.component.css']
})
export class ConsommationComponent {

  newconsommation=false
  new=false
  engins?:Engin[]
  consommationFormGroup?:FormGroup
  submitted=false;
consommations?:Consommationmazout[]
  constructor(private fb:FormBuilder,
    private router:Router,
    private consommationService:ConsommationMazoutService){

  }
  ngOnInit(): void {
    this.checkNew()
    this.consommationService.getAllConsommationmazout()
    .subscribe(data=>{
     this.consommations=data
    })


  }

  newConsommation(){
    this.router.navigateByUrl("newConsommation")
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
