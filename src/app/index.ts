/* COMO CREAR UN INDEX.TS
1- PRIMERO LLAMARLO INDEX.TS
    export * from './product.class';
    export * from './products.service';
    export * from './departamento';
    export * from './animations';
    export * from './forms.service';
    export * from './contacto.class';
--------implementacion---------------
    import { Producto , Departamento } from '../products';
    "../products" es el nombre de la carpeta
*/
export * from './product';
export * from './departamento';