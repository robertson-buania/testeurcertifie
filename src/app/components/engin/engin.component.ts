import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Engin, Engindto } from 'src/app/model/engin.model';
import { EnginService } from 'src/app/services/engin.service';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-engin',
  templateUrl: './engin.component.html',
  styleUrls: ['./engin.component.css']
})
export class EnginComponent {
new=false
  engins?:Engindto[]
  constructor(private router:Router,private enginService:EnginService){}

  ngOnInit(): void {
    this.checkNew()
    this.enginService.getAllEngin().subscribe(data=>{
      this.engins=data
    })
  }


  newEngin(){
    this.router.navigateByUrl("newEngin")
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
