import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {Zapatillas} from '../interface/zapatillas'
// import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ZapatillasService {

  // private af:AngularFirestore
  constructor(private firestore:Firestore) { }
  
  getZapatillas():Observable<Zapatillas[]>{
    const refZapatillas = collection(this.firestore, 'zapatillas');
    console.log(refZapatillas )
    return collectionData(refZapatillas , {idField:'id'}) as Observable<Zapatillas[]>

  }

  // getZapatillasByPrecio(operador:'<'|'>'|'==', precio:number ){
  //   return this.af.collection('zapatillas', ref.where('Precio',operador,precio))
  // }

  //getZapatillasByNombre(nombre:string){
    //   return this.af.collection('zapatillas', ref.where('Nombre','==',nombre))
  //}

  addZapatillas(zapatillas:Zapatillas[]){
    const refZapatillas=collection(this.firestore, 'zapatillas')
    return addDoc(refZapatillas, zapatillas)
  }
  
  deleteZapatillas(zapatillas:Zapatillas){
    const refZapatillas = doc(this.firestore, 'zapatillas/'+zapatillas.id)
    return deleteDoc(refZapatillas)
  }
}
