import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
/* 
    Instalar ts-node
    Instalar Lodash
    Instalar Express
    instalar Body Parser 
    Crear rutina 
    "serve": "./node_modules/.bin/ts-node ./products-server.ts"
*/
@Injectable()
export class AppService {
  /* Inyectamos la dependencia HTTP como private */ 

  constructor(private _http: Http) {

   }

}
