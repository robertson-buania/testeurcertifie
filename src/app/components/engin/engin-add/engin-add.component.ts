import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EnginService } from 'src/app/services/engin.service';

@Component({
  selector: 'app-engin-add',
  templateUrl: './engin-add.component.html',
  styleUrls: ['./engin-add.component.css']
})
export class EnginAddComponent {


  enginFormGroup?:FormGroup
  submitted=false;
  buttonActive=true;

  constructor(private fb:FormBuilder,
    private router:Router,private enginService:EnginService){

  }
  ngOnInit(): void {
   this.extincteur()
  }

  extincteur(){
    this.enginFormGroup=this.fb.group(
      {
        //"observation",
        description:["",Validators.required],
        nom:["",Validators.required]
      }
    );
  }

  onSaveEngin(){
    this.submitted=true
    if(this.enginFormGroup?.invalid){
      return;
    }
    this.buttonActive=false
    this.enginService.saveEngin(this.enginFormGroup?.value)
    .subscribe(data=>{
      alert("Engin Ajouté avec succès")
      this.extincteur()
      this.buttonActive=true
    })
  }

  retour(){
    this.router.navigateByUrl('engins')
  }
}
