import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ZapatillasService } from 'src/app/service/zapatillas.service';
import { Zapatillas } from 'src/app/interface/zapatillas';
import { Car, Pedido } from 'src/app/interface/car';
import { Users } from 'src/app/interface/users';
import { CarService } from 'src/app/service/car.service';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';
// import jsPDF from 'jspdf';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tableordenes',
  templateUrl: './tableordenes.component.html',
  styleUrls: ['./tableordenes.component.css'],
})
export class TableordenesComponent {
  data: any[] = [];
  ress: any[] = [];
  resc: any[] = [];
  carro: any[] = [];
  carros: any[] = [];
  pedido!: Car[];
  ped!: Pedido[];
  suma = 0;
  nombres = '';
  apellidos = '';
  descripcion = '';
  idc = '';
  idcp = '';
  pos!: number;
  nombre!:string;
  currentPage = 1;
  itemsPerPage = 10;
  totalPages = 1;
  constructor(
    public carrito: CarService,
    private router: Router,
    public _location: Location,
    private user: UserService
  ) {}

  ngOnInit(): void {
    this.mostrar();
  }

  // Mostrar mis usuarios
  mostrar() {
    this.user.getUsers('users').subscribe((resu) => {
      this.data = resu;
      // console.log('Datos->', this.data);
      this.updatePagination();
    });
   
  }

  // Buscar por nombre de usuario
  buscar(nombre: string) {
    if(nombre) {
      this.data = this.data.filter((item) => {
        return item.Nombres.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
      });
    } else {
      if (nombre === '') {
         this.mostrar(); // vuelve a mostrar todos los datos 
      } else {
          this.mostrar();
      };
      }
      this.updatePagination();

    }

  // Recargar o actualizar los pedidos
  reloadPage() {
    this.router
      .navigateByUrl('/tableprod', { skipLocationChange: true })
      .then(() => {
        console.log(decodeURI(this._location.path()));

        this.router.navigate([decodeURI(this._location.path())]);
        this.user.getUsers('users');
      });
  }

  // Para ver los pedidos de cada usuario autentificar
  irpedidos(id: any) {
    // console.log(id);
    this.idc = id;
    for (let user of this.data) {
      if (user.id == id) {
        let ide: any = user.id;
        // console.log('ID', user.id);
        this.carrito.getClientesPedido(ide).subscribe((res) => {
          this.ress = res;
          // console.log('Res->', res);
          for (let item = 0; item < res.length; item++) {
            const element = res[item];
          }
          for (let item = 0; item < res.length; item++) {
            this.pos = item;
            this.carros = res[item].carrito;
            this.suma = res[item].total;
          }
        });
      }
    }
  }


  // Mostrar el carrito de cada usuario
  mostrarCarrito(id: string) {
    this.idcp = id;
    this.carrito.getClientesPedido(this.idc).subscribe((res) => {
      this.resc = res;
      // console.log('Carro->', this.resc);
    });
  }

  // Eliminar el pedido
  eliminarPedido(ped: Pedido) {
    this.carrito.deletePedido(ped, this.idc);
  }

  // pagina anterior
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  // siguiente pagina
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  // actualizar pagina mostrada 
  updatePagination(): void {
    this.totalPages = Math.ceil(this.data.length / this.itemsPerPage);
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }
  }

  // mostrar la pagina 
  getPaginatedData(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.data.slice(startIndex, endIndex);
  }

  
}
