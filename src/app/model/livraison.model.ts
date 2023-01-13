import { Produit } from "./produit.model";

export interface Livraison{

    id?:number,
      nomclient:string,

      telclient:string,

      plaque:string;
      poidstare:number,
      poidsbrute:number,
      poidsnet:number,


      destination:string,

      produit:string,

      bonlivraison:string,

      lieuvente:string,

      datecreation:Date
}
