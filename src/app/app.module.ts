import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivraisonComponent } from './components/livraison/livraison.component';
import { LivraisonListComponent } from './components/livraison/livraison-list/livraison-list.component';
import { LivraisonItemComponent } from './components/livraison/livraison-list/livraison-item/livraison-item.component';
import { LivraisonDetailComponent } from './components/livraison/livraison-detail/livraison-detail.component';
import { LivraisonAddComponent } from './components/livraison/livraison-add/livraison-add.component';
import { MazoutComponent } from './components/mazout/mazout.component';
import { ConsommationComponent } from './components/consommation/consommation.component';
import { ConsommationListComponent } from './components/consommation/consommation-list/consommation-list.component';
import { ConsommationItemComponent } from './components/consommation/consommation-item/consommation-item.component';
import { ConsommationAddComponent } from './components/consommation/consommation-add/consommation-add.component';
import { ProduitComponent } from './components/produit/produit.component';
import { ProduitListComponent } from './components/produit/produit-list/produit-list.component';
import { ProduitItemComponent } from './components/produit/produit-list/produit-item/produit-item.component';
import { ProduitAddComponent } from './components/produit/produit-add/produit-add.component';
import { ProduitEditComponent } from './components/produit/produit-edit/produit-edit.component';
import { EnginComponent } from './components/engin/engin.component';
import { EnginAddComponent } from './components/engin/engin-add/engin-add.component';
import { EnginListComponent } from './components/engin/engin-list/engin-list.component';
import { EnginEditComponent } from './components/engin/engin-edit/engin-edit.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { LoginComponent } from './components/utilisateur/login/login.component';
import { LogoutComponent } from './components/utilisateur/logout/logout.component';
import { DepenseComponent } from './components/depense/depense.component';
import { DepenseListComponent } from './components/depense/depense-list/depense-list.component';
import { DepenseAddComponent } from './components/depense/depense-add/depense-add.component';
import { HttpClientModule } from '@angular/common/http';
import { PrintsyntheseComponent } from './components/printsynthese/printsynthese.component';
import { PrinterComponent } from './components/printer/printer.component';
import { ConnexionComponent } from './components/connexion/connexion.component';

@NgModule({
  declarations: [

    AppComponent,
    LivraisonComponent,
    LivraisonListComponent,
    LivraisonItemComponent,
    LivraisonDetailComponent,
    LivraisonAddComponent,
    MazoutComponent,
    ConsommationComponent,
    ConsommationListComponent,
    ConsommationItemComponent,
    ConsommationAddComponent,
    ProduitComponent,
    ProduitListComponent,
    ProduitItemComponent,
    ProduitAddComponent,
    ProduitEditComponent,
    EnginComponent,
    EnginAddComponent,
    EnginListComponent,
    EnginEditComponent,
    UtilisateurComponent,
    LoginComponent,
    LogoutComponent,
    DepenseComponent,
    DepenseListComponent,
    DepenseAddComponent,
    PrintsyntheseComponent,
    PrinterComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   // AutocompleteLibModule,
   ReactiveFormsModule,
   HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
