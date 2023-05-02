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
  // Obtener el id del usuario
  async getUid(){
    const user = await this.aut.currentUser;
    if(user === null){
      return null;
    }else {
      return user.uid
    }
  }
  
  // Para registrar usuario
  registerUser(user:Users){
    return createUserWithEmailAndPassword(this.auth, user.Correo, user.Contrasena);
  }

  // Para ver los usuarios
  statusUser(){
    return this.aut.authState
  }

  // Para logear como email y password autentifique
  isLogin({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password)
    
    //
  }

  // Para cerrar sesion
  logout(){
    return signOut(this.auth)
    
  }

  
}
