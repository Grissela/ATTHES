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
import { TiendaComponent } from './pages/tienda/tienda.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'tienda', component:TiendaComponent},
  {path:'nosotros', component:NosotrosComponent},
  {path:'contactos', component:ContactosComponent},
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegistroComponent},
  {path:'nuevoprod', component:NewzapatillaComponent},
  {path:'tableprod', component:TableproductosComponent},
  {path:'detalle/:nombre', component:DetalleComponent},
  {path:'carrito', component:CarritoComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
