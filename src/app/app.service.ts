import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../app';
import { Http, Response } from '@angular/http';
import { Departamento } from './departamento'
/* 
    Instalar ts-node
    Instalar Lodash
    Instalar Express
    instalar Body Parser 
    Crear rutina 
    "serve": "./node_modules/.bin/ts-node ./products-server.ts"
    
    -- importar HTTP  Y RESPONSE  Y REQUESTOPTIONS Y HEADERS
*/
@Injectable()
export class AppService {
  /* Inyectamos la dependencia HTTP como private */ 
  private url = "https://productos-e9bd9.firebaseio.com/";
  private productos= "http://localhost:8080/products";
  private jsonplaceholder;
  constructor(private _http: Http) {  }
  public getProducts(departamento: string): Observable<Producto[]> {
    return  this._http.get(this.url + departamento + '.json')
                      .map(response =>  response.json()); 
  }
  public getProductData() { 
    return  this._http.get(this.productos)
                      .map((response: Response) => response.json());
  }
  public getDepartaments( ): Observable<Departamento[]>{
    return this._http.get(this.url + 'departamentos.json')
                     .map((response: Response)=>response.json());
  } 
  public getDepartment(nombreDepartamento: string): Observable<any> {
    let  departamento  = this.getDepartaments()
                             .map((departamento: Departamento[]) => departamento.find((departamento: Departamento) => departamento.nombre === nombreDepartamento));
    let productos =  this.getProducts(nombreDepartamento);
    return Observable.forkJoin(departamento,productos); 
  }
}
