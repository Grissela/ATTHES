import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  id!:string;
  constructor( private route:Router, private router:ActivatedRoute, public service:ZapatillasService){}
  ngOnInit(): void {
    this.mostrar()
    this.id = String(this.router.snapshot.paramMap.get('id'))
    this.service.getZapatillas().subscribe(res => {
      this.zapatillas = res
    })
  }

  mostrar(){
    this.service.getZapatillas().subscribe (res=>{
     this.data = res
     
    }) 
   }

   enviar(){
    this.route.navigate(['nuevoprod'])
   }

   goToDetalleProd(id:string){
    this.route.navigate(['/edit', id]);
  }
  //  editar(){
  //   this.route.navigate(['edit/:name'])
  //  }
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
