import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailAuthCredential } from 'firebase/auth';
import { Users } from 'src/app/interface/users';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';
// import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public login !: FormGroup
  data:any[]=[]
  mensajeError!: string;
  user:string="AD"
  pas:string="12345"

  token="true";
  username!:string;
  password!:string;

  usuario!:Users[]
  constructor(private Build:FormBuilder, private route:Router, public service:UserService, private auth:AuthService){}

  ngOnInit(): void {
     this.initForm();
     console.log(this.login.value)
    // this.mostrar()
  }

  initForm(){
    this.login = this.Build.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  async validacion(){
    if(this.login.valid){
      const res=this.auth.isLogin(this.login.value)
      .catch(error => {
        console.log("error");
        alert("Credenciales incorrectas")
      })
      if (await res ) {
        // console.log("res ->", res);
        alert("Bienvenido")
        this.route.navigate(['/'])
        }
      }
}

  
}
