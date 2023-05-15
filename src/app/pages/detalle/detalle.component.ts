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

  tallaSeleccionada: string = '';
  nombre=""
  data:any[]=[]
  zapatillas!:Zapatillas[];
  car!:Car[];
  id = "";
  list!:any
  tallas:any[] = [];
  cantidad!:number;
  resultado=1;
  parseInt = window.parseInt;
  constructor(private service:ZapatillasService, private route:ActivatedRoute,private router:Router,private carrito:CarService){
    const firebase = getFirestore();
  }
 
  ngOnInit(): void {
    // aqui paso por parametro el id 
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.service.getZapatillas().subscribe(zapatillas=>{
      this.zapatillas = zapatillas
      console.log(this.zapatillas);
    })
  }

  guardar({Nombre, Imagen, Cantidad, Marca, Modelo, Codigo, Serie, Costo, Descripcion}:any){
    this.list = {
      Nombre: Nombre,
      Imagen: Imagen,
      Marca: Marca,
      Modelo: Modelo,
      Talla: [this.tallaSeleccionada], // Aquí asignamos la talla seleccionada
      Codigo: Codigo,
      Serie: Serie,
      Cantidad: Cantidad,
      Costo: Costo,
      Descripcion: Descripcion
    };
 
    this.carrito.loadcarrito(this.list);
    this.router.navigate(['/carrito']);
  
  }
}
