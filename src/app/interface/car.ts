import { Users } from "./users";

export interface Car {
    id?:string;
    Nombre:string;
    Imagen:string;
    Cantidad:number;
    Costo:number;
    Marca:string;
    Descripcion:string;
}

export interface Pedido {
    id?:string;
    cliente:String
    DNI:string;
    Direccion:string;
    carrito:String  
    fecha:Date; 
    total:number
}