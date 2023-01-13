import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Depense } from 'src/app/model/depense.model';
import { DepenseService } from 'src/app/services/depense.service';

@Component({
  selector: 'app-depense-add',
  templateUrl: './depense-add.component.html',
  styleUrls: ['./depense-add.component.css']
})
export class DepenseAddComponent {


  depenseFormGroup?:FormGroup
  submitted=false;
  buttonActive=true
  constructor(private fb:FormBuilder,
    private router:Router,private depenseService:DepenseService){

  }
  ngOnInit(): void {
   this.extincteur()
  }

  extincteur(){
    this.depenseFormGroup=this.fb.group(
      {
        //"observation",
        montant:[0.00,Validators.required],
        observation:["",Validators.required],
        motif:["",Validators.required]
      }
    );
  }

  onSavedepense(){
    this.submitted=true
    if(this.depenseFormGroup?.invalid){
      return;
    }
    this.buttonActive=false
    const depense:Depense={
      datecreation:new Date(),
      montant:this.depenseFormGroup?.value['montant'],
      motif:this.depenseFormGroup?.value['motif'],
      observationdep:this.depenseFormGroup?.value['observation']
    }
    //console.log(depense)

    this.depenseService.saveDepense(depense)
    .subscribe(data=>{
      alert("Dépense Ajoutée avec succès")
      this.router.navigateByUrl('depenses')
      //console.log(data)
      this.buttonActive=true;
      this.retour()

    })
  }

  retour(){
    this.router.navigateByUrl('depenses')
  }
}
