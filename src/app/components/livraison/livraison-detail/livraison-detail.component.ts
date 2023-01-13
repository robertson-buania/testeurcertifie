import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livraison } from 'src/app/model/livraison.model';
import { LivraisonService } from 'src/app/services/livraison.service';

@Component({
  selector: 'app-livraison-detail',
  templateUrl: './livraison-detail.component.html',
  styleUrls: ['./livraison-detail.component.css']
})
export class LivraisonDetailComponent {

  poidsnet=0;
  poidstare=0;
  poidsbrute=0;
  livraisonId:number
  livraison?:Livraison
  constructor(private livraisonService:LivraisonService,
    private activatedRoute:ActivatedRoute
    ,private route:Router){
    this.livraisonId=activatedRoute.snapshot.params['id']
  }

  ngOnInit(): void {
    this.livraisonService.getLivraison(this.livraisonId)
    .subscribe(data=>{
      this.livraison=data
      this.poidsbrute+=data.poidsbrute;
      this.poidstare+=data.poidstare;
      this.poidsnet+=data.poidsnet
     });

    }
retour(){
  this.route.navigateByUrl('livraisons')
}


}
