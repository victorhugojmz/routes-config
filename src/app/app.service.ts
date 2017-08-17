import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../app';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Departamento } from './departamento'
import { myHeaders } from './headers';
/* 
    Instalar ts-node
    Instalar Lodash
    Instalar Express
    instalar Body Parser 
    Crear rutina 
    "serve": "./node_modules/.bin/ts-node ./products-server.ts"
    https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related
    -- importar HTTP  Y RESPONSE  Y REQUESTOPTIONS Y HEADERS
  private _url = "http://jsonplaceholder.typicode.com/users";

	constructor(private _http: Http){
	} 
  getUser(userId){
		return this._http.get(this.getUserUrl(userId))
			.map(res => res.json());
	}
    addUser(user){
		return this._http.post(this._url, JSON.stringify(user))
			.map(res => res.json());
	}
    updateUser(user){
		return this._http.put(this.getUserUrl(user.id), JSON.stringify(user))
			.map(res => res.json());
	}
    
    deleteUser(userId){
		return this._http.delete(this.getUserUrl(userId))
			.map(res => res.json());
	}
    
    private getUserUrl(userId){
		return this._url + "/" + userId;
	}
    */
@Injectable()
export class AppService {
  /* Inyectamos la dependencia HTTP como private */ 
  private url = "https://productos-e9bd9.firebaseio.com/";
  private productos= "http://localhost:8080/products/";
  /* USER ADMINISTRATION */
  /* CREATE NEW */ 
  private users_url = "https://jsonplaceholder.typicode.com/users";
  private post_url = "https://productos-rest-api.firebaseio.com/.json"
  constructor(private _http: Http) {  }
  public getProducts(departamento: string): Observable<Producto[]> {
    return  this._http.get(this.url + departamento + '.json')
                      .map(response =>  response.json()); 
  }
  /* --------------------------- CORS NEEDED -------------------------- */ 
  public postProductData() {
    let data = { ok : 1 , hello: new Date, name: "victor" };
      this._http.post(this.productos,JSON.stringify(data),myHeaders())
                .subscribe( data => console.log(data));
  }
  public getProductData():  Observable<Producto[]> {
    return  this._http.get(this.productos)
                      .map((response: Response) =>  response.json());
  }
  public deleteProductData(id) {
    return  this._http.delete(this.productos + id, myHeaders())
                      .subscribe(
                        () => {},
                        (err) => console.log(err),
                        () => console.log("DELETED"));
  }
  getUsers(){
		return this._http.get(this.users_url)
			.map(res => res.json());
	}   
  public putData(id){
    let data = { stock: 10 };
    this._http.put(this.productos + id, JSON.stringify(data),myHeaders())
              .subscribe(
                () => {},
                (err) => console.log(err),
                () => console.log("PUTTED"));
  }
  /* ---------------------------------------------------------------- */   
   /* --------------------------- FIREBASE APP  -------------------------- */ 
  public getDepartaments( ): Observable<Departamento[]>{
    return this._http.get(this.url + 'departamentos.json')
                     .map((response: Response)=>response.json());
  } 
  public getDepartment(nombreDepartamento: string): Observable<any> {
       let  departamento  = this.getDepartaments()
                             .map((departamento: Departamento[]) => departamento.find((departamento: Departamento) => departamento.nombre === nombreDepartamento));
      let productos =  this.getProducts(nombreDepartamento);
    return Observable.combineLatest(departamento,productos); 
  }
   /* ----------------------------------------------------- */ 

}
