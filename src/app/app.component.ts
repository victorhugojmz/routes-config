import { Component, OnInit } from '@angular/core';
import  {AppService}  from './app.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data;
  constructor(private _appService: AppService){ }
  ngOnInit(){
    /* Los servicios pueden tener errores y podemos logear esos errores en el componente*/ 
    /* 
      EXPLICAR LOS TIPOS DE  FUNCIONES QUE VAN EN EL CUERPO DE SUSCRIBE
    */
    this._appService.getProducts("Men")
                    .subscribe( 
                        data => this.data = data,
                        (error) => console.log(error),
                        ( ) => console.log("Operation Completed")
                      );
  }
  /* EJEMPLO DE FORK JOIN USANDO DOS OBSERVADORES */
}
