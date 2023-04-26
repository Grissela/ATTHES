import { Component,OnInit, ViewChild, ElementRef   } from '@angular/core';
import { ActivatedRoute, Route ,Router } from '@angular/router';
import { ZapatillasService } from 'src/app/service/zapatillas.service';
import { Zapatillas } from 'src/app/interface/zapatillas';
import { Car } from 'src/app/interface/car';
import { Users } from 'src/app/interface/users';
import { CarService } from 'src/app/service/car.service';
import Swal from 'sweetalert2'
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';
// import jsPDF from 'jspdf';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';


@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {
  
  constructor(){}
  


}
