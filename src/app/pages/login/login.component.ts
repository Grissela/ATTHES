import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailAuthCredential } from 'firebase/auth';
import { Users } from 'src/app/interface/users';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2'
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
    // inicializo
    this.initForm();
    // console.log(this.login.value);
    // this.mostrar()
  }

  initForm() {
    this.login = this.Build.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  // Aqui valido mi login si esta registrado o no
  async validacion() {
    if (this.login.valid) {
      const res = this.auth.isLogin(this.login.value).catch((error) => {
        // console.log('error');
        // alert('Credenciales incorrectas');
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Credenciales incorrectas',
          footer: '<a href="registro">¿Deseas registrarte?</a>'
        })
      });
      if (await res) {
        // console.log("res ->", res);
        this.service.getUsers('users').subscribe((data) => {
          for (let x of data) {
            // con el correo lo igualo a mi variable para guardar el rol
            if (this.login.value.email == x.Correo) {
              this.role= x.Rol
            }
          }
          // console.log('Rol->',this.role);
          localStorage.setItem("rol",this.role)
        });

        // alert('Bienvenido');
        Swal.fire({
          title: '¡Bienvenido!',
          text: 'Disfruta tu estadia.',
          imageUrl: 'assets/ALERTAS/undraw_welcoming_re_x0qo.svg',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
        })
        this.route.navigate(['/']);
      }
    }
  }
}
