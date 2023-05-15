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
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.service.getZapatillas().subscribe(zapatillas =>{
      this.zapatillas = zapatillas
      // console.log("esto es ->",this.zapatillas);
      for(let zap of this.zapatillas){
        zap.id 
        // console.log("el id es ->",zap.id);
        
      }
      
    })
  }
  goToDetalle(id:string){
    this.router.navigate(['/detalle', id]);
  }

}
