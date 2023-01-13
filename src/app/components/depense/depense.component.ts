import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Depense } from 'src/app/model/depense.model';
import { DepenseService } from 'src/app/services/depense.service';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-depense',
  templateUrl: './depense.component.html',
  styleUrls: ['./depense.component.css']
})
export class DepenseComponent {


new=false
  depenses?:Depense[]
  constructor(private router:Router,private depenseService:DepenseService){}

  ngOnInit(): void {
    this.checkNew()
    this.depenseService.getAllDepense().subscribe(data=>{
      this.depenses=data
    })
  }

  newDepense(){
    this.router.navigateByUrl("newDepense")
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
