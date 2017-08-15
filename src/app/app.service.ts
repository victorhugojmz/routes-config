import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './product';
import { Http, Response } from '@angular/http';
import { Departamento } from './departamento'
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
  private url = "https://productos-e9bd9.firebaseio.com/";
  constructor(private _http: Http) {  }
  public getProducts(departamento: string): Observable<Producto[]> {
    return  this._http.get(this.url + departamento + '.json')
                      .map(response =>  response.json()); 
  }
  public getDepartaments( ): Observable<Departamento[]>{
    return this._http.get(this.url + 'departamentos.json')
                     .map((response: Response)=>response.json());
  } 
}
