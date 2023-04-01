// export interface Pedido {
//     id:string;
//     Nombres:string;
//     Apellidos:string;
//     productos:ProductoPedido [];
//     precioTotal:number;
//     estado:EstadoPedido;
//     Fecha:Date;
//     valoracion:number;
// }

export interface Pedido {
    delivery_address : string,
    date_order : Date,
    user_id: String,
    items: any[],
    _id?: string,

}
interface ProductoPedido {
    // producto: Producto;
    cantidad:number;
}

export type  EstadoPedido = 'enviado' | 'en camino' | 'entregado'