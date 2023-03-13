import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZapatillasService } from 'src/app/service/zapatillas.service';
import { Zapatillas } from 'src/app/interface/zapatillas';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
  nombre=""
  data:any[]=[]
  zapatillas!:Zapatillas[];
  id = "";
  list!:any
  cantidad!:number;
  constructor(private service:ZapatillasService, private route:ActivatedRoute,private router:Router,private car:CarService){

  }
 
  ngOnInit(): void {
    this.nombre = String(this.route.snapshot.paramMap.get('nombre'));
    // this.mostrarpokemons()
    this.service.getZapatillas().subscribe(zapatillas=>{
      this.zapatillas = zapatillas
    })

    // this.guardar('pera',5,10)
  }

 enviar(){
 
 }
 guardar({Nombre, Cantidad, Costo}:any){
  this.list = {
   Nombre:Nombre,
   Cantidad:Cantidad,
   Costo:Costo
   
 }
 console.log(this.list)
 this.car.addCar(this.list)
 this.router.navigate(['/carrito'])
 
 
 
}

}
