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
  // VARIABLES A UTILIZAR---
  data:any[]=[]
  costoTotal!:number;
  zapatillas!:Zapatillas[];
  id!:string;
  nombre!:string;
  currentPage = 1;
  itemsPerPage = 10;
  totalPages = 1;
  constructor( 
    private route:Router, 
    private router:ActivatedRoute, 
    public service:ZapatillasService){}

  
  ngOnInit(): void {
    // Para mostrar los registros y snapshot para redirigir a otro componente mediante su id
    this.mostrar()
    this.id = String(this.router.snapshot.paramMap.get('id'))
    this.service.getZapatillas().subscribe(res => {
      this.zapatillas = res
      this.updatePagination();
    })
  }

  // Mostrar todos los registros de los productos---------------
  mostrar(){
    this.service.getZapatillas().subscribe (res=>{
     this.data = res
     
    }) 
   }

  //  para buscar 
  buscar(nombre: string) {
    if(nombre) {
      this.data = this.data.filter((item) => {
        return item.Nombre.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
      });
    } else {
      if (nombre === '') {
        this.mostrar(); // vuelve a mostrar todos los datos
      } else {
          this.mostrar();
        };
      }
    }
  

  //  Para enviar a nuevo producto para agregar un nuevo producto---------
   enviar(){
    this.route.navigate(['nuevoprod'])
   }


  // Para editar los campos de el producto ya registrado---------------- 
   goToDetalleProd(id:string){
    this.route.navigate(['/edit', id]);
  }
  

  // Para eliminar cada producto de la  tabla de productos------------------
   eliminar(zapatillas:Zapatillas){
    Swal.fire({
      title: '¿Desea eliminar producto?',
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

   getPaginatedData(): Zapatillas[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.data.slice(startIndex, endIndex);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.data.length / this.itemsPerPage);
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }
  }
}
