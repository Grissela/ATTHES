import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { ZapatillasService } from 'src/app/service/zapatillas.service';
import { UserService } from 'src/app/service/user.service'
import { Users } from 'src/app/interface/users';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-tableusers',
  templateUrl: './tableusers.component.html',
  styleUrls: ['./tableusers.component.css']
})
export class TableusersComponent {
    // VARIABLES A UTILIZAR--
    data:any[]=[]
    users!:Users[];
    nombre!:string;
  constructor(
    private route:Router, 
    public service:UserService){}

  
  ngOnInit(): void {
    this.mostrar()
  }

  // Para mostrar la tabla  y sus registros------------
  mostrar(){
    const path = 'users'
    this.service.getUsers(path).subscribe (res=>{
     this.data = res
     
    }) 
   }

  //  Para buscar el usuario---------------
   buscar(nombre: string) {
    if(nombre) {
      this.data = this.data.filter((item) => {
        return item.Nombres.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
      });
    } else {
      if (nombre === '') {
        this.mostrar(); // vuelve a mostrar todos los datos
      } else {
          this.mostrar();
        };
      }
    }

  // Para redirigir a otro componente donde se editara el producto
   enviar(){
    this.route.navigate(['newuser'])
   }


  //  Para eliminar a usuarios-----------------------------
   eliminar(users:Users){
    Swal.fire({
      title: 'Desea eliminar usuario',
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Exitoso!',
          'Has Eliminado usuario exitosamente',
          'success'
        )
        this.service.deleteUser(users)
        // this.reloadPage()
        //this.route.navigate(['carrito'])
      }
    })
   }
}
