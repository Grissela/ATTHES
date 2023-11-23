import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';
import { Users } from './interface/users';

@Injectable({
  providedIn: 'root'
})
export class PermisosGuard implements CanActivate {
  constructor(private router: Router, private auth:AuthService, private user:UserService,
    ) { }
    info!:any
    data!:Users[]
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const role = localStorage.getItem("rol");
      console.log('CanActivate is running',role);
      if (role == "0") {
        return true;
      } else {
        // alert('You don´t permissions')
        this.router.navigate(['/login']);
        return false;
      }


      // aqui si permite cuando son nuevos registrados sin cuenta e ingresan directo se puede ver las tablas mas no cuando recien logean en el login en el de abajo si restringe en ambas formas cuando es recien registrado o cuando inicia sesion en el loggin pero se ve por un momento en el encabezado tabla prod pero recarga solo
      // practica
      //   const role = localStorage.getItem("rol");
      //   if ( role == "0"){
      //     return true;
      // }if (role == "1") {
      //   // Redirigir o denegar acceso según tus necesidades
      //   this.router.navigate(['/']); // Puedes redirigir a una página de acceso denegado
      //   return false;
      // } else
      // {
      //   // alert('You don´t permissions')
      //   this.router.navigate(['/login']);
      //     return false
      // }    
     }
  token():boolean{
    return false
  }
  
}
