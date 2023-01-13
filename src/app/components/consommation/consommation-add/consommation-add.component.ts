import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Consommationmazout } from 'src/app/model/consommationmazout.model';
import { Engin } from 'src/app/model/engin.model';
import { ConsommationMazoutService } from 'src/app/services/consommation.service';
import { EnginService } from 'src/app/services/engin.service';

@Component({
  selector: 'app-consommation-add',
  templateUrl: './consommation-add.component.html',
  styleUrls: ['./consommation-add.component.css']
})
export class ConsommationAddComponent {

  newconsommation=false
  buttonActive=true
  engins?:Engin[]
  consommationFormGroup?:FormGroup
  submitted=false;
consommations?:Consommationmazout[]
  constructor(private fb:FormBuilder,
    private router:Router,
    private enginService:EnginService
    ,private consommationService:ConsommationMazoutService){

  }
  ngOnInit(): void {
    this.tracteur()
    this.extincteur()

  }

  extincteur(){
    this.consommationFormGroup=this.fb.group(
      {
        //"observation",
        heure:['',Validators.required],
        datedudebut:[new Date(),Validators.required],
        datefin:["",Validators.required],
        litre:[0.0,Validators.required],
        engin:['',Validators.required]
      }
    );
  }

  onSaveconsommation(){
    this.submitted=true
    if(this.consommationFormGroup?.invalid){
      return;
    }
    let date=new Date();
    const consommation:Consommationmazout={
      datecreation:new Date(),
      heurechargement:this.consommationFormGroup?.value['heure'],
      nombrelitre:this.consommationFormGroup?.value['litre'],
      periodedebut:this.consommationFormGroup?.value['datedudebut'],
      periodefin:this.consommationFormGroup?.value['datefin'],
      engin:this.consommationFormGroup?.value['engin'],
    }
    this.buttonActive=false
    this.consommationService.saveConsommationmazout(consommation)
    .subscribe(data=>{
      alert("Consommation Ajoutée avec succès")
      this.extincteur()
      this.router.navigateByUrl('consommations')
      this.buttonActive=true
      this.retour()
    })
  }

  tracteur(){
    this.enginService.getAllEngin()
    .subscribe(data=>{
      this.engins=data
    })
  }

  retour(){
    this.router.navigateByUrl('consommations')
  }
}
