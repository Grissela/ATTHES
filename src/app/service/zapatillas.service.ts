import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {Zapatillas} from '../interface/zapatillas'
// import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ZapatillasService {

  // private af:AngularFirestore
  constructor(private firestore:Firestore) { }
  
  // Mostrar zapatillas
  getZapatillas():Observable<Zapatillas[]>{
    const refZapatillas = collection(this.firestore, 'zapatillas');
    // console.log(refZapatillas )
    return collectionData(refZapatillas , {idField:'id'}) as Observable<Zapatillas[]>

  }

  // Mostrar mediante su id
  getZapatillasById(id:string){
    const refZapatillas = collection(this.firestore , 'zapatillas'+ id );
    return collectionData(refZapatillas , {idField:'id'}) as Observable<Zapatillas[]>

  }

  // Agregar nueva zapatilla
  addZapatillas(zapatillas:Zapatillas[]){
    const refZapatillas=collection(this.firestore, 'zapatillas')
    return addDoc(refZapatillas, zapatillas)
  }

  // Actualizar zapatillas
  updateZapatillas(_id:string, zapatillas:any) {
    const refZapatillas = doc(this.firestore, 'zapatillas/'+ _id)
    return updateDoc(refZapatillas, zapatillas)
  }
  
  // Eliminar zapatilla de acuerdo a su id
  deleteZapatillas(zapatillas:Zapatillas){
    const refZapatillas = doc(this.firestore, 'zapatillas/'+zapatillas.id)
    return deleteDoc(refZapatillas)
  }
}
