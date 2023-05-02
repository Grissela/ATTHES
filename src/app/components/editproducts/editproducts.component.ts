import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators,FormControl  } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Zapatillas } from 'src/app/interface/zapatillas';
import { ZapatillasService } from 'src/app/service/zapatillas.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-editproducts',
  templateUrl: './editproducts.component.html',
  styleUrls: ['./editproducts.component.css']
})
export class EditproductsComponent {
  public editar !: FormGroup
  datos:any=[]
  id=""
  constructor(
    private route: Router,
    private build:FormBuilder,
    private router:ActivatedRoute,
    private zapatillas:ZapatillasService){
    this.editar = this.build.group({
      Nombre:['',[Validators.required]],
      Descripcion:['',[Validators.required]],
      Precio:['',[Validators.required]],
      Marca:['',[Validators.required]],
      Imagen:['',[Validators.required]],
      Cantidad:['',[Validators.required]],
    })
  }

  ngOnInit():void{
    this.id = String(this.router.snapshot.paramMap.get('id'))
    this.zapatillas.getZapatillas().subscribe(res =>{
      this.datos = res
      // console.log(this.datos)
      for(let data of this.datos){
        if(data.id == this.id){
          this.editar = this.build.group({
            Nombre:[data.Nombre],
            Descripcion:[data.Descripcion],
            Precio:[data.Precio],
            Marca:[data.Marca],
            Imagen:[data.Imagen],
            Cantidad:[data.Cantidad],
          })
        }
      }
    })
  }
// Guardar mi nueva actualizacion y se vea en mi producto mediante su id
guardar(){
this.id = String(this.router.snapshot.paramMap.get('id')); 
this.zapatillas.updateZapatillas(this.id, this.editar.value)
  // alert("Actualizado correcto")
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Se actualizó tu producto correctamente',
    showConfirmButton: false,
    timer: 1500
  })
  this.route.navigate(['/tableprod'])
} 
}




