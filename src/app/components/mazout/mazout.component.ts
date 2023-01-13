import { Component } from '@angular/core';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-mazout',
  templateUrl: './mazout.component.html',
  styleUrls: ['./mazout.component.css']
})
export class MazoutComponent {

  new=false
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
