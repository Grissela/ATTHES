import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ZapatillasService } from 'src/app/service/zapatillas.service';
import { Zapatillas } from 'src/app/interface/zapatillas';
import { CarService } from 'src/app/service/car.service';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  data:any[]=[]

  zapatillas!:Zapatillas[];
  suma=0
  constructor( private route:Router, public service:ZapatillasService, public car:CarService){}
  ngOnInit(): void {
    this.mostrar()
  }

  mostrar(){
    this.car.getCar().subscribe (res=>{
     this.data = res
     for(let result of this.data){
      const suma=result.Cantidad*result.Costo
      this.suma +=suma
     }
    }) 
   }
}
