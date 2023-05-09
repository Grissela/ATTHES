import { Component, OnInit } from '@angular/core';
import { ZapatillasService } from 'src/app/service/zapatillas.service';
import { Zapatillas } from 'src/app/interface/zapatillas';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  array!:any[]
  
  zapatillas!:Zapatillas[];
  id=""

 
  constructor(private route:ActivatedRoute,private service:ZapatillasService, private router:Router){}


  ngOnInit(): void {
    this.service.getZapatillas().subscribe(zapatillas =>{
      this.zapatillas = zapatillas.slice(0, 6)
      // console.log(this.zapatillas)
    })

  }
  goToDetalle(id:string){
    this.router.navigate(['/detalle', id]);
  }

  

}
