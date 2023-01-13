import { Time } from "@angular/common";
import { Engin } from "./engin.model";

export interface Consommationmazout{

    id?:number,
     heurechargement:Time;
      nombrelitre:number;
      datecreation:Date
      periodedebut:Date;

      periodefin:Date;

      engin?:string;
}
