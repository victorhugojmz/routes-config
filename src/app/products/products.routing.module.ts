import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent }  from './product-details/product-details.component';
import { DepartamentComponent } from './departament/departament.component'
const productRoutes: Routes = [
  { path: 'departamentos',component: DepartamentComponent },
  { path: 'departamentos/:nombre', component: ProductComponent },  
  { path: 'departamentos/:nombre/:id',component: ProductDetailsComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(productRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }