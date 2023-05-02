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
  roles= "1";
  data:any[]=[]

  constructor(private readonly Build:FormBuilder, private route:Router, public service:UserService,  private authUser:AuthService){}

  ngOnInit(){
    this.register=this.initForm();
    // console.log(this.register.value)
    
  }

  // VALIDACION-----------------------------------------
  //Nombre
  get nombreNoValido(){
    return this.register.get('Nombres')?.invalid && this.register.get('Nombres')?.touched;
  }

  //Apellido no valido
  get apellidoNoValido(){
    return this.register.get('Apellidos')?.invalid && this.register.get('Apellidos')?.touched;
  }

  // Celular
  get celularNoValido(){
    return this.register.get('Celular')?.invalid && this.register.get('Celular')?.touched;
  }

  // Correo
  get correoNoValido(){
    return this.register.get('Correo')?.invalid && this.register.get('Correo')?.touched;
  }

  // Contraseña
  get password1NoValido(){
    return this.register.get('Contrasena')?.invalid && this.register.get('Contrasena')?.touched;
  }

  // ---------------------------------------------------
  
  // inicializar
  initForm():FormGroup{
    return this.Build.group({
      Nombres:['',[Validators.required, Validators.minLength(3)]],
      Apellidos:['',[Validators.required, Validators.minLength(3)]],
      Celular:['',[Validators.required, Validators.maxLength(9)]],
      Correo:['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      Contrasena:['',[Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      Contrasena2:['',[Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      Rol:['',[Validators.required]],
    })
  }

  limpiar(){
    this.register.reset();
  }
 

  MarcadoValidado(){
    // Para que marque todo rojo si es que envia vacio
    if(this.register.invalid){
      return Object.values(this.register.controls).forEach(control =>{
        control.markAllAsTouched();
      })
    } 
  }
  
  // agregar al servicio usuario
  async agregar(){  
    this.MarcadoValidado();
    const registers = {
      Nombres:this.register.value.Nombres,
      Apellidos:this.register.value.Apellidos,
      Celular:this.register.value.Celular,
      Correo:this.register.value.Correo,
      Contrasena:this.register.value.Contrasena,
      Rol:1
    }
    // console.log(registers)
    // console.log("Datos del registro: ",registers)
    
    // para registrar al usuario y obtener su uid para que se haga un nuevo registro
    const res = await this.authUser.registerUser(registers)
    
    if(res){ 
      // console.log("Exito a Registrar usuario");
      const path = 'users'
      const id = String(res.user?.uid)
      // console.log("UID ->", res.user?.uid);
      this.service.addUSer(registers, path, id)
      this.route.navigate(['/login'])
    }
    // console.log("Uid del usuario: ",res.user.uid)
    this.limpiar()
    
  }
}
