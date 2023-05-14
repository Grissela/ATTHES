import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ZapatillasService } from 'src/app/service/zapatillas.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-newzapatilla',
  templateUrl: './newzapatilla.component.html',
  styleUrls: ['./newzapatilla.component.css']
})
export class NewzapatillaComponent {
  public AddProductos !: FormGroup
  data:any[]=[]

  constructor(private readonly Build:FormBuilder, private route:Router, public service:ZapatillasService){}

  ngOnInit(): void {
     this.AddProductos=this.initForm();
    // this.mostrar()
  }

  initForm():FormGroup{
    return this.Build.group({
      Nombre:['',[Validators.required]],
      Descripcion:['',[Validators.required]],
      Precio:['',[Validators.required]],
      Cantidad:['',[Validators.required]],
      Marca:['',[Validators.required]],
      Modelo:['',[Validators.required]],
      Codigo:['',[Validators.required]],
      Serie:['',[Validators.required]],
      Imagen:['',[Validators.required]],
    })
    
  }
  agregar(){
    if(this.AddProductos.valid){
      this.service.addZapatillas(this.AddProductos.value)
      Swal.fire({
        title: 'Agregado',
        text: 'Esta agregado el nuevo producto',
        imageUrl: 'https://www.cyberdefendersprogram.com/assets/undraw-svgs/undraw_Security_on_s9ym.svg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
      this.route.navigate(['tableprod'])
    }else {
      Swal.fire({
        icon: 'warning',
        title: '',
        text: 'Los campos no deben estar vacios!'
      })
    }
  }


}
