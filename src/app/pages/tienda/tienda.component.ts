import { Component, OnInit } from '@angular/core';
import { ZapatillasService } from 'src/app/service/zapatillas.service';
import { Zapatillas } from 'src/app/interface/zapatillas';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent {
  nombre=""
  zapatillas!:Zapatillas[];
  id=""
  constructor(private route:ActivatedRoute,private service:ZapatillasService, private router:Router){}
  ngOnInit(): void {
    this.nombre = String(this.route.snapshot.paramMap.get('nombre'));
    this.service.getZapatillas().subscribe(zapatillas =>{
      this.zapatillas = zapatillas
    })
  }
  goToDetalle(nombre:string){
    this.router.navigate(['/detalle', nombre]);
  }

}
