import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZapatillasService } from 'src/app/service/zapatillas.service';
import { Zapatillas } from 'src/app/interface/zapatillas';
import { CarService } from 'src/app/service/car.service';
import { Car } from 'src/app/interface/car';
import { doc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {

  
  nombre=""
  data:any[]=[]
  zapatillas!:Zapatillas[];
  car!:Car[];
  id = "";
  list!:any
  cantidad!:number;
  resultado=1;
  constructor(private service:ZapatillasService, private route:ActivatedRoute,private router:Router,private carrito:CarService){
    const firebase = getFirestore();
  }
 
  ngOnInit(): void {
    this.nombre = String(this.route.snapshot.paramMap.get('nombre'));
    this.service.getZapatillas().subscribe(zapatillas=>{
      this.zapatillas = zapatillas
    })

  }

 enviar(){
 
 }
 guardar({Nombre,Imagen, Cantidad,Marca, Costo}:any){
  this.list = {
   Nombre:Nombre,
   Imagen:Imagen,
   Marca:Marca,
   Cantidad:Cantidad,
   Costo:Costo
   
 }
 console.log(this.list)
 this.carrito.loadcarrito(this.list)
 this.router.navigate(['/carrito'])
 
}

}
