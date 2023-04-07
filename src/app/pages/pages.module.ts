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
import { SoporteComponent } from './soporte/soporte.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { CambiosComponent } from './cambios/cambios.component';
import { PagoComponent } from './pago/pago.component';
import { PoliticaComponent } from './politica/politica.component';
import { MicuentaComponent } from './micuenta/micuenta.component';


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
    SoporteComponent,
    PreguntasComponent,
    CambiosComponent,
    PagoComponent,
    PoliticaComponent,
    MicuentaComponent,
    
    
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
    CarritoComponent,
    SoporteComponent,
    PreguntasComponent,
    CambiosComponent,
    PagoComponent,
    PoliticaComponent,
    MicuentaComponent,
  ],
})
export class PagesModule { }
