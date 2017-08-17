import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
/* Componentes */
import { AppComponent } from './app.component';
import { FormContactoComponent } from './form-contacto/form-contacto.component'; 
const appRoutes: Routes = [
  { path: '',  component:   FormContactoComponent }, 
  { path: '**', component: NotFoundComponent }
 ];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutesModule { }