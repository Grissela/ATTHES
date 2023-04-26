import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/interface/users';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-micuenta',
  templateUrl: './micuenta.component.html',
  styleUrls: ['./micuenta.component.css']
})
export class MicuentaComponent implements OnInit {
  public cuenta !: FormGroup
  name=""
  datos!:Users[]
  id=""
  constructor(
    private router:ActivatedRoute, 
    private route: Router,
    private user:UserService,
    private build:FormBuilder){
      this.cuenta = this.build.group({
        Nombres:['',[Validators.required]],
        Apellidos:['',[Validators.required]],
        Celular:['',[Validators.required]],
        Correo:['',[Validators.required]],
        Contrasena:['',[Validators.required]],
      })
    }

  ngOnInit():void{
    const path = 'users'
    this.id = String(this.router.snapshot.paramMap.get('id'))
    this.user.getUsers(path).subscribe(res => {
      this.datos = res
      for(let data of this.datos){
        if(data.id == this.id){
          this.cuenta = this.build.group({
            Nombre:[data.Nombres],
            Apellidos:[data.Apellidos],
            Celular:[data.Celular],
            Correo:[data.Correo],
            Contrasena:[data.Contrasena],
          })
        }
      }
    })
  }

  guardar(){
    this.id = String(this.router.snapshot.paramMap.get('id')); 
    this.user.updateUsers(this.id, this.cuenta.value)
      alert("Actualizado correcto")
       this.route.navigate(['acount/:id'])
    } 
}
