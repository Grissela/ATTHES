import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, CollectionReference, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Car } from '../interface/car';
import { Pedido } from '../interface/pedido';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class CarService {
  path = 'carrito/';
  uid='';

  constructor(private firestore:Firestore, private auth:AuthService) {
    this.auth.statusUser().subscribe(res=>{
      console.log(res);
        if(res !==null){
          this.uid = res.uid
          // this.loadcarrito(car);

        }
    })
  }
  // mostrar carrito
  getCar():Observable<Car[]>{
    const refCar = collection(this.firestore, 'users/' + this.uid + '/'+ this.path);
    console.log(refCar )
    return collectionData(refCar , {idField:'id'}) as Observable<Car[]>

  }
  
  // agregue al carrito
  loadcarrito(car:Car[]){
    const refCar= collection( this.firestore, 'users/' + this.uid + '/'+ this.path);
    return addDoc(refCar,car)
  }
  
  

  
  // eliminar del carrito
  deleteCar(car:Car){
    const refCar = doc(this.firestore, 'users/' + this.uid + '/'+ this.path +car.id)
    return deleteDoc(refCar)
  }
}
