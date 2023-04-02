import { Component,OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { ZapatillasService } from 'src/app/service/zapatillas.service';
import { Zapatillas } from 'src/app/interface/zapatillas';
import { Car } from 'src/app/interface/car';
import { CarService } from 'src/app/service/car.service';
import Swal from 'sweetalert2'
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit  {
  data:any[]=[]
  zapatillas!:Zapatillas[];
  car!:Car[]
  suma=0
  resultado=1
  login: boolean = false
  constructor( private route:Router, public service:ZapatillasService, public carrito:CarService, public aut:AuthService){
    this.aut.statusUser().subscribe(res => {
      if (res) {
        console.log("Estado ->",res);
        console.log('esta logeado');
        console.log('UID->', res.uid);
        this.login = true
      } else {
        console.log('No esta logeado');
        // Swal.fire({
        //   icon: 'info',
        //   text: 'No esta logeado!',
        //   showConfirmButton: false,
        //   timer: 1500
        // })
        this.login = false
      }
    })
  }

  ngOnInit(): void {
   this.mostrar()
    
  }
  
  mostrar(){
    this.carrito.getCar().subscribe (res=>{
     this.data = res
     for(let result of this.data){
      const suma=result.Cantidad*result.Costo
      this.suma +=suma
     }
    }) 
   }
  //  reducircantidad(){
  //     if(this.resultado == 1){
  //     }
  //     else{
  //      this.resultado -=1
  //     }
  //    }
  // aumentarcantidad(){
  //     this.resultado +=1
  // }

  eliminar(car:Car){
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
        this.carrito.deleteCar(car)
        this.route.navigate(['carrito'])
      }
    })
   }
   
}
