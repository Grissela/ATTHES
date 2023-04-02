import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Users } from '../interface/users';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, setDoc } from '@angular/fire/firestore';
// Esto se importa para tener el estado de firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {query, where } from "firebase/firestore";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  uid!: string
  constructor(private firestore:Firestore,private auth:Auth, private aut:AngularFireAuth) { 
    
  }

  ngOnInit(){
    
  }
  async getUid(){
    const user = await this.aut.currentUser;
    if(user === null){
      return null;
    }else {
      return user.uid
    }
  }
  // mostrar(){
  //   const refUsers= collection(this.firestore, "users"+this.uid);
  //   const q = query(refUsers, where(this.uid, '==' ,this.uid));
  //  }


  registerUser(user:Users){
    return createUserWithEmailAndPassword(this.auth, user.Correo, user.Contrasena);
  }

  statusUser(){
    return this.aut.authState
    
  }

  isLogin({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password)
    
    //
  }

  logout(){
    return signOut(this.auth)
    
  }

  

  
  // registrar({ Correo, Password }: any){
  //   return this.aut.createUserWithEmailAndPassword(Correo, Password)
  // }

}
