import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {Users} from '../interface/users'
import { AuthService } from './auth.service';
import {query, where } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uid='';
  constructor(private firestore:Firestore, private auth:AuthService) {
    // this.auth.statusUser().subscribe(res=>{
    //   console.log(res);
    //     if(res !==null){
    //       this.uid = res.uid
    //       // this.loadcarrito(car);

    //     }
    // })
   
   }
   
 

   //mostrar usuarios 
  getUsers(path:string):Observable<Users[]>{
    const refUsers = collection(this.firestore, 'users/' + this.uid);
    console.log(refUsers)
    return collectionData(refUsers , {idField:'id'}) as Observable<Users[]>

  }

  //eliminar usuario
  delete(){
    localStorage.removeItem('admin')
  }
  

  // Para agregar un nuevo usuario 
  addUSer(user: any, path: string, id: string): Promise<void> {
    const docRef = doc(this.firestore, path, id)
    return setDoc(docRef, user)
  }
}
