export class Producto {    
    id?: number;
    sku?: string;
    stock?: number;
    nombre?: string;
    precio?: number;
    departamento?: string;
    descuento?: number;
    descripcion?: string;
    detalles?: string;
    tallas?: Tallas[];
    imagen?: string;
    imagenes?: Imagen[];
    marca?: string;
    colores?: Color[];
    specs?: Spec[ ];
}
 export class Imagen { 
     url: string = '';
     descripcion: string = '';
     titulo: string = '';
}
export class Spec{
    nombre: string = '';
    descripcion: string = '';
}
export class Color {
    color: string = '';
    imagen: string = '';
}
export class Tallas {
    talla: string = '';
    stock:  string = '';
}