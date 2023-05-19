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
  filteredProducts: Zapatillas[] = []; //para que se almacene los productos filtrados
  id = ""; // para pasar por parametro el id

  // para realizar busqueda 
  modeloSeleccionado: string = '';
  precioSeleccionado: number[] = [];
  colorSeleccionado: string = '';
  serieSeleccionada: string = '';
  precios: number[] = [45.6, 63.8, 69.8]; //precios establecidos
  
  currentPage = 1; //para que muestre desde la pagina 1
  itemsPerPage = 10; //cuantos items muestra por pagina
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

  // pasar a detalle con parametro
  goToDetalle(id: string) {
    this.router.navigate(['/detalle', id]);
  }

  // filtrar busqueda por modelo
  filtrarPorModelo() {
    if (!this.modeloSeleccionado || this.modeloSeleccionado === '') {
      this.filteredProducts = this.zapatillas;
    } else {
      this.filteredProducts = this.zapatillas.filter(zap => zap.Modelo === this.modeloSeleccionado);
    }
    this.updatePagination();

  }
 
  // buscar por precio
  filtrarPorPrecio() {
    if (this.precioSeleccionado.length === 0) {
      this.filteredProducts = this.zapatillas;
    } else {
      this.filteredProducts = this.zapatillas.filter(zap =>
        this.precioSeleccionado.includes(zap.Precio)
      );
    }
  }
  
  //  método para controlar la selección y deselección de los precios
  togglePrecioSeleccionado(precio: number) {
    const index = this.precioSeleccionado.indexOf(precio);
    if (index > -1) {
      this.precioSeleccionado.splice(index, 1);
    } else {
      this.precioSeleccionado.push(precio);
    }
    this.filtrarPorPrecio();
  }

  // el filtro sin precio seleccionado
  resetFiltroPrecio() {
    this.precioSeleccionado = [];
    this.filtrarPorPrecio(); // Aplicar el filtrado sin precios seleccionados
  }


  // si hay o no productos
  hayProductosDisponibles() {
    return this.zapatillas.some(zap => zap.Modelo === this.modeloSeleccionado && this.precioSeleccionado.includes(zap.Precio));
  }

  // pagina anterior
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // pagina siguiente
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  // actualizar la pagina para que muestre la pagina actual
  updatePagination() {
    this.totalPages = Math.ceil(this.filteredProducts.length / this.itemsPerPage);
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }
  }

  // paginacion de productos
  getPaginatedProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredProducts.slice(startIndex, endIndex);
  }

  // busqueda por color
  filtrarPorColor() {
    if (!this.colorSeleccionado || this.colorSeleccionado === '') {
      this.filteredProducts = this.zapatillas;
    } else {
      const color = this.colorSeleccionado.toLowerCase();
      this.filteredProducts = this.zapatillas.filter(zap => zap.Descripcion.toLowerCase().includes(color));
    }
    this.updatePagination();
  }
  
  // si la descripcion tiene la palabra relacionada al color buscado
  contieneColor(zap: Zapatillas, color: string): boolean {
    const keywords = ['rojo', 'azul', 'verde', 'negro', 'morado', 'fucsia', 'blanco', 'gris', 'celeste', 'naranja', 'rosa']; // Lista de palabras clave relacionadas con colores
    const descripcion = zap.Descripcion.toLowerCase();
  
    // Verificar si la descripción contiene alguna palabra clave relacionada con el color
    return keywords.some(keyword => descripcion.includes(keyword));
  }

  // buscar por serie si 
  filtrarPorSerie() {
    if (!this.serieSeleccionada || this.serieSeleccionada === '') {
      this.filteredProducts = this.zapatillas;
    } else {
      this.filteredProducts = this.zapatillas.filter(zap => zap.Serie === this.serieSeleccionada);
    }
    this.updatePagination();
  }
}