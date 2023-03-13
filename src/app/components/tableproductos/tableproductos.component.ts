import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZapatillasService } from 'src/app/service/zapatillas.service';
import { Zapatillas } from 'src/app/interface/zapatillas';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-tableproductos',
  templateUrl: './tableproductos.component.html',
  styleUrls: ['./tableproductos.component.css']
})
export class TableproductosComponent {
  data:any[]=[]

  costoTotal!:number;
  zapatillas!:Zapatillas[];
  constructor( private route:Router, public service:ZapatillasService){}
  ngOnInit(): void {
    this.mostrar()
  }

  mostrar(){
    this.service.getZapatillas().subscribe (res=>{
     this.data = res
     
    }) 
   }

   enviar(){
    this.route.navigate(['nuevoprod'])
   }

   eliminar(zapatillas:Zapatillas){
    Swal.fire({
      title: 'Desea eliminar producto',
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Exitoso!',
          'Has Eliminado producto exitosamente',
          'success'
        )
        this.service.deleteZapatillas(zapatillas)
        this.route.navigate(['tableprod'])
      }
    })
   }
}
