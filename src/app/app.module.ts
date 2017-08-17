import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutesModule } from './routes'; 
import { AppComponent } from './app.component';
import { AppService } from './app.service'
import { HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormContactoComponent } from './form-contacto/form-contacto.component';
import { FormServiceService } from './form-service.service';
import { NotFoundComponent } from './not-found/not-found.component'
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    FormContactoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsModule,
    RoutesModule
  ],
  providers: [
    AppService,
    FormServiceService
  ]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
