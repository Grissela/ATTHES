import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewzapatillaComponent } from './components/newzapatilla/newzapatilla.component';
import { TableproductosComponent } from './components/tableproductos/tableproductos.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { SoporteComponent } from './pages/soporte/soporte.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { PreguntasComponent } from './pages/preguntas/preguntas.component';
import { CambiosComponent } from './pages/cambios/cambios.component';
import { PagoComponent } from './pages/pago/pago.component';
import { PoliticaComponent } from './pages/politica/politica.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'tienda', component:TiendaComponent},
  {path:'nosotros', component:NosotrosComponent},
  {path:'contactos', component:ContactosComponent},
  {path:'login', component:LoginComponent,...canActivate(() => redirectLoggedInTo(['/']))},
  {path:'registro', component:RegistroComponent},
  {path:'nuevoprod', component:NewzapatillaComponent},
  {path:'tableprod', component:TableproductosComponent},
  {path:'detalle/:nombre', component:DetalleComponent},
  {path:'carrito', component:CarritoComponent},
  {path:'soporte', component:SoporteComponent},
  {path:'preguntas', component:PreguntasComponent},
  {path:'cambios', component:CambiosComponent},
  {path:'pagos', component:PagoComponent},
  {path:'politica', component:PoliticaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }