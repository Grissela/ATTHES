import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {Zapatillas} from '../interface/zapatillas'

@Injectable({
  providedIn: 'root'
})
export class ZapatillasService {

  constructor(private firestore:Firestore) { }
  
  getZapatillas():Observable<Zapatillas[]>{
    const refZapatillas = collection(this.firestore, 'zapatillas');
    console.log(refZapatillas )
    return collectionData(refZapatillas , {idField:'id'}) as Observable<Zapatillas[]>

  }

  addZapatillas(zapatillas:Zapatillas[]){
    const refZapatillas=collection(this.firestore, 'zapatillas')
    return addDoc(refZapatillas, zapatillas)
  }
  
  deleteZapatillas(zapatillas:Zapatillas){
    const refZapatillas = doc(this.firestore, 'zapatillas/'+zapatillas.id)
    return deleteDoc(refZapatillas)
  }
}
