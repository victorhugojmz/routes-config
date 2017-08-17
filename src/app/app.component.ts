import { Component, OnInit } from '@angular/core';
import  {AppService}  from './app.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data1;
  data2;
  constructor(private _appService: AppService){ }
  ngOnInit(){
    /* Los servicios pueden tener errores y podemos logear esos errores en el componente*/ 
    /* 
      EXPLICAR LOS TIPOS DE  FUNCIONES QUE VAN EN EL CUERPO DE SUSCRIBE
    this._appService.postProductData();
    this._appService.deleteProductData(1);
    this._appService.getDepartment('Men')
    .map((departmentData)=> new Object({ departamento: departmentData[0] , productos: departmentData[1] }))
    .subscribe((result: any) => { 
                              this.data1 =  result.departamento,  
                              this.data2 = result.productos 
      });
    */
    this._appService.putData(2);
    this._appService.getUsers()
          .subscribe(
              
    )
  }
}
