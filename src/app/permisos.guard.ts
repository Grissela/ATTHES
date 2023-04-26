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
        if ( role == "0"){
          return true;
      } else
      {
        // alert('You don´t permissions')
        this.router.navigate(['/login']);
          return false
      }
    }

  token():boolean{
    return false
  }
  
}
