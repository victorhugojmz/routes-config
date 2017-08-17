import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class FormServiceService {
  paises: any;
  private apiPaises: string =  "https://restcountries.eu/rest/v2/all";
  constructor(private _http: Http ){ }
  public getCountries(): Observable<any> {
    return this._http.get(this.apiPaises)
              .map((response: Response) => response.json());
  }
} 
