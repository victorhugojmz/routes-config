import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../app';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Departamento } from './departamento'
/* 
    Instalar ts-node
    Instalar Lodash
    Instalar Express
    instalar Body Parser 
    Crear rutina 
    "serve": "./node_modules/.bin/ts-node ./products-server.ts"
    https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related
    -- importar HTTP  Y RESPONSE  Y REQUESTOPTIONS Y HEADERS
*/
@Injectable()
export class AppService {
  /* Inyectamos la dependencia HTTP como private */ 
  private url = "https://productos-e9bd9.firebaseio.com/";
  private productos= "http://localhost:8080/products/";
  /* USER ADMINISTRATION */
  /* CREATE NEW */ 
  private posts_url = "https://jsonplaceholder.typicode.com/posts";
  private post_url = "https://productos-rest-api.firebaseio.com/.json"
  constructor(private _http: Http) {  }
  public getProducts(departamento: string): Observable<Producto[]> {
    return  this._http.get(this.url + departamento + '.json')
                      .map(response =>  response.json()); 
  }
  /* CORS NEEDED */ 
  public postProductData() {
    let data = { ok : 1 , hello: new Date, name: "victor" };
    const headers: Headers = new Headers();
    headers.append('Content-Type','application/json');
    const reqop: RequestOptions = new RequestOptions();
    reqop.headers = headers;
      this._http.post(this.productos,JSON.stringify(data),reqop)
                .subscribe( data => console.log(data));
  }
  public getProductData():  Observable<Producto[]> {
    const headers: Headers = new Headers();
    headers.append('Access-Control-Allow-Origin','*');
    const reqop: RequestOptions = new RequestOptions();
    reqop.headers = headers;
    return  this._http.get(this.productos)
                      .map((response: Response) =>  response.json());
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
