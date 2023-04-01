import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';/*SERVICIO DE USUARIOS*/ 
import Swal from 'sweetalert2'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  public register !: FormGroup
  data:any[]=[]

  constructor(private readonly Build:FormBuilder, private route:Router, public service:UserService,  private authUser:AuthService){}

  ngOnInit(){
    this.register=this.initForm();
    console.log(this.register.value)
  }

  // inicializar
  initForm():FormGroup{
    return this.Build.group({
      Nombres:['',[Validators.required]],
      Apellidos:['',[Validators.required]],
      Celular:['',[Validators.required, Validators.maxLength(9)]],
      Correo:['',[Validators.required]],
      Contrasena:['',[Validators.required]],
      Contrasena2:['',[Validators.required]],
      Rol:['',[Validators.required]],
    })
    
  }

  // agregar al servicio usuario
  async agregar(){  
    console.log("Datos del registro: ",this.register.value)
    // para registrar al usuario y obtener su uid para que se haga un nuevo registro
    const res = await this.authUser.registerUser(this.register.value)
    if(res){ 
      console.log("Exito a Registrar usuario");
      const path = 'users'
      const id = String(res.user?.uid)
      console.log("UID ->", res.user?.uid);
      this.service.addUSer(this.register.value, path, id)
      this.route.navigate(['/login'])
    }
    console.log("Uid del usuario: ",res.user.uid)

  }
}
