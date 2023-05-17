import { Component, OnInit } from '@angular/core';
import { ZapatillasService } from 'src/app/service/zapatillas.service';
import { Zapatillas } from 'src/app/interface/zapatillas';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  nombre = "";
  zapatillas: Zapatillas[] = [];
  filteredProducts: Zapatillas[] = [];
  id = "";
  modeloSeleccionado: string = '';
  precioSeleccionado: number[] = [];

  precios: number[] = [45.6, 63.8, 69.8];


  currentPage = 1;
  itemsPerPage = 10;
  totalPages = 0;

  constructor(private route: ActivatedRoute, private service: ZapatillasService, private router: Router) {}

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.service.getZapatillas().subscribe(zapatillas => {
      this.zapatillas = zapatillas;
      this.filtrarPorModelo();
      this.updatePagination();

    });
  }

  goToDetalle(id: string) {
    this.router.navigate(['/detalle', id]);
  }

  filtrarPorModelo() {
    if (!this.modeloSeleccionado || this.modeloSeleccionado === '') {
      this.filteredProducts = this.zapatillas;
    } else {
      this.filteredProducts = this.zapatillas.filter(zap => zap.Modelo === this.modeloSeleccionado);
    }
    this.updatePagination();

  }
  // togglePrecioSeleccionado(precio: number) {
  //   if (this.precioSeleccionado.includes(precio)) {
  //     this.precioSeleccionado = this.precioSeleccionado.filter(p => p !== precio);
  //   } else {
  //     this.precioSeleccionado.push(precio);
  //   }
  //   this.filtrarPorPrecio();
  // }
  filtrarPorPrecio() {
    if (this.precioSeleccionado.length === 0) {
      this.filteredProducts = this.zapatillas;
    } else {
      this.filteredProducts = this.zapatillas.filter(zap =>
        this.precioSeleccionado.includes(zap.Precio)
      );
    }
  }
  
  // Agrega el siguiente método para controlar la selección y deselección de los precios
  togglePrecioSeleccionado(precio: number) {
    const index = this.precioSeleccionado.indexOf(precio);
    if (index > -1) {
      this.precioSeleccionado.splice(index, 1);
    } else {
      this.precioSeleccionado.push(precio);
    }
    this.filtrarPorPrecio();
  }
  resetFiltroPrecio() {
    this.precioSeleccionado = [];
    this.filtrarPorPrecio(); // Aplicar el filtrado sin precios seleccionados
  }

  hayProductosDisponibles() {
    return this.zapatillas.some(zap => zap.Modelo === this.modeloSeleccionado && this.precioSeleccionado.includes(zap.Precio));
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.filteredProducts.length / this.itemsPerPage);
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }
  }

  getPaginatedProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredProducts.slice(startIndex, endIndex);
  }
}