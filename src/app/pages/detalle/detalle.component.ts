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
    // aqui paso por parametro el id 
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.service.getZapatillas().subscribe(zapatillas=>{
      this.zapatillas = zapatillas
    })

  }

 enviar(){
 
 }
//  aca guardo mis datos del detalle y envio a mi carrito para que se agregue
 guardar({Nombre,Imagen, Cantidad,Marca, Costo, Descripcion}:any){
  this.list = {
   Nombre:Nombre,
   Imagen:Imagen,
   Marca:Marca,
   Cantidad:Cantidad,
   Costo:Costo,
   Descripcion:Descripcion
   
 }
//  console.log(this.list)
 this.carrito.loadcarrito(this.list)
 this.router.navigate(['/carrito'])
 
}

}
