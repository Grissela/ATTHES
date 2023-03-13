import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TiendaComponent } from './tienda/tienda.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactosComponent } from './contactos/contactos.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { DetalleComponent } from './detalle/detalle.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
    TiendaComponent,
    NosotrosComponent,
    ContactosComponent,
    LoginComponent,
    RegistroComponent,
    DetalleComponent,
    CarritoComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    HomeComponent,
    TiendaComponent,
    NosotrosComponent,
    ContactosComponent,
    LoginComponent,
    RegistroComponent,
    DetalleComponent,
    CarritoComponent
  ],
})
export class PagesModule { }
