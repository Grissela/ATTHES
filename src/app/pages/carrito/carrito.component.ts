import { Component,OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { ZapatillasService } from 'src/app/service/zapatillas.service';
import { Zapatillas } from 'src/app/interface/zapatillas';
import { Car } from 'src/app/interface/car';
import { CarService } from 'src/app/service/car.service';
import Swal from 'sweetalert2'
import { AuthService } from 'src/app/service/auth.service';
import jsPDF from 'jspdf';
import { Location } from '@angular/common';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit  {
  // variables a usar
  data:any[]=[]
  user:any[]=[]
  info!:string
  uid=""
  ide:any
  zapatillas!:Zapatillas[];
  car!:Car[]
  suma:number =0
  res=0
  resultado=1
  id!:string;
  login: boolean = false
  
  
  constructor( private route:Router, private _location :Location, public service:ZapatillasService, public carrito:CarService, public aut:AuthService){
    // Para autentificar el usuario logeado-----------------------------------------------
    this.aut.statusUser().subscribe(res => {
      if (res) {
        // console.log("Estado ->",res);
        // console.log('esta logeado');
        // console.log('UID->', res.uid);
        this.uid = res.uid
        this.login = true
        
      } else {
        // console.log('No esta logeado');
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
  reloadPage() {
    this.route.navigateByUrl('/carrito', { skipLocationChange: true }).then(() => {
      console.log(decodeURI(this._location.path()));
      this.route.navigate([decodeURI(this._location.path())]);
    });
}
  
  // Para mostrar todo lo que tiene el carrito--------------------------------------------
  mostrar(){
    this.aut.statusUser().subscribe(res =>{
    this.ide = res?.uid
    // console.log('Aqui ->',this.ide);
    this.carrito.getMostrar(res?.uid).subscribe (res=>{
     this.data = res;
    //  console.log('**************************************');
     let total = 0;
     for(let i=0; i<this.data.length;i++){
      //console.log('Al->',this.data[i].Costo);
     let sum:number = this.data[i].Cantidad*this.data[i].Costo 
     total +=sum
      
      
      //this.suma.push(sum)
      
     }
     this.suma = total
    //  console.log('Suma->',this.suma);
     //console.log('px->',this.suma);
     
    })
  })
   }

  // Para dirigir al componente boleta donde se vera los pedidos---------------------------
  goToBoleta(id:string){
        this.route.navigate(['/boleta',id]);
    }
    
  // -----------------------actualizar-------------
  //  actualizarItem(item: any) {
  //   this.carrito.actualizarItem(item);
    
  // }
  //  reducircantidad(){
  //     if(this.resultado == 1){
  //     }
  //     else{
  //      this.resultado -=1
  //     }
  //    }
  // aumentarcantidad(){
  //     this.resultado +=1
  // ----------------------------------------------------

  // para eliminar uno por un pedido del carrito---------------------------
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
        this.reloadPage()
        //this.route.navigate(['carrito'])
      }
    })
   }
   
}
