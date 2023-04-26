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
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public login!: FormGroup;
  data: any[] = [];
  mensajeError!: string;
  user: string = 'AD';
  pas: string = '12345';
  role: any;
  token = 'true';
  username!: string;
  password!: string;

  usuario!: Users[];
  constructor(
    private Build: FormBuilder,
    private route: Router,
    public service: UserService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.initForm();
    console.log(this.login.value);
    // this.mostrar()
  }

  initForm() {
    this.login = this.Build.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  async validacion() {
    if (this.login.valid) {
      const res = this.auth.isLogin(this.login.value).catch((error) => {
        console.log('error');
        alert('Credenciales incorrectas');
      });
      if (await res) {
        // console.log("res ->", res);
        this.service.getUsers('users').subscribe((data) => {
          for (let x of data) {
            if (this.login.value.email == x.Correo) {
              this.role= x.Rol
            }
          }
          console.log('Rol->',this.role);
          localStorage.setItem("rol",this.role)
        });

        alert('Bienvenido');
        this.route.navigate(['/']);
      }
    }
  }
}
