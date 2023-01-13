import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { ConsommationAddComponent } from './components/consommation/consommation-add/consommation-add.component';
import { ConsommationComponent } from './components/consommation/consommation.component';
import { DepenseAddComponent } from './components/depense/depense-add/depense-add.component';
import { DepenseComponent } from './components/depense/depense.component';
import { EnginAddComponent } from './components/engin/engin-add/engin-add.component';
import { EnginComponent } from './components/engin/engin.component';
import { LivraisonAddComponent } from './components/livraison/livraison-add/livraison-add.component';
import { LivraisonDetailComponent } from './components/livraison/livraison-detail/livraison-detail.component';
import { LivraisonComponent } from './components/livraison/livraison.component';
import { PrintsyntheseComponent } from './components/printsynthese/printsynthese.component';
import { ProduitAddComponent } from './components/produit/produit-add/produit-add.component';
import { ProduitEditComponent } from './components/produit/produit-edit/produit-edit.component';
import { ProduitComponent } from './components/produit/produit.component';

const routes: Routes = [
  {path:"",component:PrintsyntheseComponent},
  {path:"synthese",component:PrintsyntheseComponent},
  {path:"connexion",component:ConnexionComponent},
  {path:"livraisons",component:LivraisonComponent},
  {path:"newLivraison",component:LivraisonAddComponent},
  {path:"detailLivraison/:id",component:LivraisonDetailComponent},

  {path:"produits",component:ProduitComponent},
  {path:"newProduct",component:ProduitAddComponent},
  {path:"editProduct/:id",component:ProduitEditComponent},

  {path:"consommations",component:ConsommationComponent},
  {path:"newConsommation",component:ConsommationAddComponent},

  {path:"engins",component:EnginComponent},
  {path:"newEngin",component:EnginAddComponent},

  {path:"depenses",component:DepenseComponent},
  {path:"newDepense",component:DepenseAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
