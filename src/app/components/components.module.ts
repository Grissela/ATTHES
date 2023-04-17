import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NewzapatillaComponent } from './newzapatilla/newzapatilla.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableproductosComponent } from './tableproductos/tableproductos.component';
import { TableusersComponent } from './tableusers/tableusers.component';
import { EditproductsComponent } from './editproducts/editproducts.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NewzapatillaComponent,
    TableproductosComponent,
    TableusersComponent,
    EditproductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    NewzapatillaComponent,
    TableproductosComponent,
    TableusersComponent,
    EditproductsComponent
  ]
})
export class ComponentsModule { }
