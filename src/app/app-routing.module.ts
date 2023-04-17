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
import { MicuentaComponent } from './pages/micuenta/micuenta.component';
import { TableusersComponent } from './components/tableusers/tableusers.component';
import { EditproductsComponent } from './components/editproducts/editproducts.component';
import { BoletaComponent } from './pages/boleta/boleta.component';
import { PermisosGuard } from './permisos.guard';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'tienda', component:TiendaComponent},
  {path:'nosotros', component:NosotrosComponent},
  {path:'contactos', component:ContactosComponent},
  {path:'login', component:LoginComponent,...canActivate(() => redirectLoggedInTo(['/']))},
  {path:'registro', component:RegistroComponent},
  {path:'nuevoprod', component:NewzapatillaComponent,...canActivate(()=> redirectUnauthorizedTo('/login'))},
  {path:'tableprod', component:TableproductosComponent,...canActivate(()=> redirectUnauthorizedTo('/login'))},
  // ,canActivate:[PermisosGuard]
  {path:'tableuser', component:TableusersComponent,...canActivate(()=> redirectUnauthorizedTo('/login'))},
  {path:'detalle/:nombre', component:DetalleComponent,...canActivate(()=> redirectUnauthorizedTo('/login'))},
  {path:'edit/:id', component:EditproductsComponent,...canActivate(()=> redirectUnauthorizedTo('/login'))},
  {path:'carrito', component:CarritoComponent},
  {path:'soporte', component:SoporteComponent},
  {path:'preguntas', component:PreguntasComponent},
  {path:'cambios', component:CambiosComponent},
  {path:'pagos', component:PagoComponent},
  {path:'politica', component:PoliticaComponent},
  {path:'boleta/:id', component:BoletaComponent},
  {path:'acount/:name', component:MicuentaComponent},
  {path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
