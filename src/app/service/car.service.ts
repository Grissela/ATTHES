import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, CollectionReference, deleteDoc, doc, Firestore, getDocs, updateDoc } from '@angular/fire/firestore';
import { docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Car, Pedido } from '../interface/car';
// import { Pedido } from '../interface/pedido';
import { AuthService } from './auth.service';
import { User } from 'firebase/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CarService {
 
  private pedido!: Pedido;
  private clientes!:User[];

  path = 'carrito/';
  referencia = 'pedidos';
  uid='';
  
 
  
  constructor(
    private firestore:Firestore, 
    private auth:AuthService,
    private router:Router) {
    this.auth.statusUser().subscribe(res=>{
      console.log(res);
        if(res !==null){
          this.uid = res.uid
        //  this.loadcarrito();

        }
    })
  }
  
loadCarrito(){
  const refCar = collection(this.firestore, 'users/' + this.uid + '/'+ this.path);
}

//  PEDIDO
// addPedido(producto: Pedido){
//   this.pedido = {
//     id:this.uid,
//     cliente:[],
//     DNI:'75412454',
//     Direccion:'Calle',
//     carrito:[],   
//     fecha: new Date(),
//   }

  
// }


  // MOSTRAR pedidos todos 
  getMostrar(id:any):Observable<any[]>{
    const refCar = collection(this.firestore, 'users/'+ id + '/'+ this.path) 
    console.log('nav->',refCar);
    return collectionData(refCar, {idField:'id'} ) as Observable<any[]>
  }
  // mostrar carrito
  getCar():Observable<Car[]>{
    const refCar = collection(this.firestore, 'users/' + this.uid + '/'+ this.path);
    console.log('nav->',refCar )
    return collectionData(refCar , {idField:'id'}) as Observable<Car[]>
  }

  // eliminar del carrito
  deleteCar(car:any){
    const refCar = doc(this.firestore, 'users/' + this.uid + '/'+ this.path + car.id)
    console.log('Eliminar->',refCar);
    
    return deleteDoc(refCar)
  }

  //eliminar todo el carrito
  eliminarDocumentos() {
    const collectionRef = collection(this.firestore, 'users/' + this.uid + '/'+ this.path);
    getDocs(collectionRef).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        deleteDoc(doc.ref);
      });
    });
  }

  // eliminar pedido
  deletePedido(ped:any, uid:string){
    const refPed = doc(this.firestore, 'users/' + uid + '/'+ this.referencia +'/'+ ped.id)
    console.log();
    
    return deleteDoc(refPed)
  }
  //actualizar carrito
  

//  -----------------------------------------------
  // mostrar clientes
  getClientesPedidos():Observable<any[]>{
    const refCliente = collection(this.firestore, 'users/' + this.uid + '/'+ this.referencia);
    console.log(refCliente )
    return collectionData(refCliente , {idField:'id'}) as Observable<any[]>
  }

  //Tabla de ordenes de pedidos
  getClientesPedido(id:any):Observable<any[]>{
    const refCliente = collection(this.firestore, 'users/' + id + '/'+ this.referencia);
    console.log(refCliente )
    return collectionData(refCliente , {idField:'id'}) as Observable<any[]>
  }
  
  //agregar pedido datos del cliente
  addCliente(cliente: any){
    const refCliente=collection(this.firestore, 'users/' +  this.uid + '/'+ this.referencia)
    return addDoc(refCliente, cliente)
  }

  // ------------------------------------------------------
  // agregue al carrito
  loadcarrito(car:Car[]){
    const refCar= collection( this.firestore, 'users/' + this.uid + '/'+ this.path);
    return addDoc(refCar,car)
  }
  
  // update carrito
  // actualizarItem(item: any) {
  //   const index = this.items.findIndex(i => i.id === item.id);
  //   if (index !== -1) {
  //     this.items[index] = item;
  //   }
  // }
  

  
   
}
