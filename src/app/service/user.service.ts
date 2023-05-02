import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, setDoc, updateDoc } from '@angular/fire/firestore';
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
   }
   

   //mostrar usuarios 
  getUsers(path:string):Observable<Users[]>{
    const refUsers = collection(this.firestore, 'users/' + this.uid);
    // console.log(refUsers)
    return collectionData(refUsers , {idField:'id'}) as Observable<Users[]>

  }

  //eliminar usuario del localstorage
  delete(){
    localStorage.removeItem('admin')
  }

  // Eliminar determinado usuario por su id
  deleteUser(user:any){
    const refUsers = doc(this.firestore, 'users/' + this.uid + user.id)
    // console.log('Eliminar->',refUsers);
    
    return deleteDoc(refUsers)
  }
  // //para agregar nuevo usuario desde el crud pero al final se deslogeaba solo utilizar el de abajo
  addUsuario(user:Users[]){
    const refUsers=collection(this.firestore, 'users')
    return addDoc(refUsers, user)
  }
  //actualizar datos del usuario
  updateUsers(_id:string, users:any) {
    const refUsers = doc(this.firestore, 'users/'+ _id)
    return updateDoc(refUsers, users)
  }
  // Para agregar un nuevo usuario 
  addUSer(user: any, path: string, id: string): Promise<void> {
    const docRef = doc(this.firestore, path, id)
    return setDoc(docRef, user)
  }
}
