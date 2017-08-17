import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormServiceService } from '../form-service.service'
@Component({
  selector: 'app-form-contacto',
  templateUrl: './form-contacto.component.html',
  styleUrls: ['./form-contacto.component.css']
})
export class FormContactoComponent implements OnInit {
  paises;
  ContactoForm : FormGroup = new FormGroup({
        nombre : new FormControl(''),
        pais: new FormControl(''),
        ciudad: new FormControl('')
  });
  constructor(private _formService : FormServiceService) { }
  ngOnInit() { 
      this._formService.getCountries()
                       .subscribe(data => this.paises = data,
                                  (error) => console.log("Hubo un error"),
                                  ( ) => console.log("COMPLETO! EXITOSO") 
                        );
   }
} 
