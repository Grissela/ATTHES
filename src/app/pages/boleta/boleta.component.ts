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
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { Location } from '@angular/common';
@Component({
  selector: 'app-boleta',
  templateUrl: './boleta.component.html',
  styleUrls: ['./boleta.component.css'],
})
export class BoletaComponent {
  public pedido!: FormGroup;
  pedidos: any;
  clientes: any;
  cliente: any;
  ress: any[] = [];
  register: any;
  data!: Users[];
  fecha!: string;
  dni!: string;
  direccion!: string;
  suma = 0;
  car!: Car[];
  id = '';
  uid = '';
  idp = '';
  user_cliente: any;
  nombres = '';
  apellidos = '';
  descripcion = '';
  id_cliente!: string;
  login: boolean = false;
  dato: any;
  sumaCarrito = 0;
  fechas: any[] = [];
  fech: any[] = [];
  constructor(
    private ZapaService: ZapatillasService,
    private UserService: UserService,
    private carrito: CarService,
    private aut: AuthService,
    private readonly Build: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private elementRef: ElementRef,
    public _location: Location
  ) {
    // autentificar al usuario su id 
    this.aut.statusUser().subscribe((res) => {
      if (res) {
        // console.log('Estado ->', res);
        // console.log('esta logeado');
        // console.log('UID->', res.uid);
        this.uid = res.uid;
        this.login = true;
      } else {
        // console.log('No esta logeado');
        this.login = false;
      }
    });
  }

  ngOnInit(): void {
    // INICIALIZAR EL FORMULARIO
    this.pedido = this.initForm();
    const path = 'users';
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.UserService.getUsers(path).subscribe((res) => {
      this.data = res;
      // console.log('Es esto:' + this.data);
    });
    this.show();
    this.mostrar();
    this.reloadPage()
  }

  initForm(): FormGroup {
    return this.Build.group({
      dni: ['', [Validators.required]],
      Direccion: ['', [Validators.required]],
    });
  }

  // PARA ENVIAR EL PEDIDO
  async agregar() {
    const Pedido = {
      cliente: this.user_cliente,
      DNI: this.pedido.value.dni,
      Direccion: this.pedido.value.Direccion,
      carrito: this.car,
      fecha: new Date(),
      total: this.suma,
    };
    this.carrito.addCliente(Pedido);
    // console.log('Pedido -> ', Pedido);
    this.carrito.eliminarDocumentos();
  }

  // para que se vea el carrito
  mostrarCarrito(id: string) {
    // alert(id);
    this.idp = id;
    this.pedidos;

    this.carrito.getClientesPedido(this.id).subscribe((res) => {
      this.pedidos = res;
      // console.log(this.pedidos);
    });
  }

  // PARA IMPRIMIR
  imprimir() {
    // Extraemos la tabla
    const DATA = document.getElementById('tabla');

    // Obtenemos el alto y ancho de la tabla
    const totalTableHeight = DATA!.clientHeight;
    const totalTableWidth = 500;

    // Creamos el documento PDF con las dimensiones de la tabla
    const doc = new jsPDF('p', 'pt', [1000, 1000]);

    // Agregamos la cabecera manualmente
    const header = ['No.', 'Modelo', 'Marca', 'Descripcion', 'Cantidad',  'Costo', 'Sub Total'];
    const headWidths = [30, 120, 80, 300, 70, 80, 80];
    const startY = 50;
    const startX = 30;
    let currX = startX;
    let currY = startY;
    header.forEach((title, index) => {
        doc.setFontSize(12);
        currX += headWidths[index];
    });

    // Opciones de html2canvas
    const options = {
        background: 'white',
        scale: 3,
    };

    // Convertimos la tabla a imagen con html2canvas
    html2canvas(DATA!, {
        ignoreElements: (element) => {
            return element.classList.contains('no-pdf');
        },
    }).then((canvas) => {
        const img = canvas.toDataURL('image/PNG');
        const bufferX = 30;
        const bufferY = 100;
        const imgProps = (doc as any).getImageProperties(img);
        const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
        const pdfHeight = totalTableHeight + bufferY * 2;

        // Ajustamos el tamaño de la página PDF para que se adapte a la tabla completa
        const pageHeight = doc.internal.pageSize.getHeight();
        const pageWidth = doc.internal.pageSize.getWidth();
        const position = pdfHeight + bufferY * 2;

        if (position < totalTableHeight) {
            doc.addPage();
        }

        // Agregamos la imagen al PDF
        doc.addImage(
            img,
            'PNG',
            bufferX,
            bufferY,
            pdfWidth,
            pdfHeight,
            undefined,
            'FAST',
            0
        );
        // Llamamos a la segunda función para imprimir los datos
        this.imprimirDatos(doc);

        // Agregamos el estilo de impresión
        const style = document.createElement('style');
        style.innerHTML = `
            @media print {
                .modal-table{
                    max-width: 1300px;
                    width: 100%;
                    font-size: 5pt;
                    font-family: serif;
                    background-color: #000;
                    color: #fff;
                }
            }
        `;
        document.head.appendChild(style);
    });
}

// PARA IMPRIMIR DATOS PERSONALES
imprimirDatos(doc: any) {
  const DATA1 = document.getElementById('datos');
  const totalTableHeight = DATA1!.clientHeight;

  const options = {
    background: 'white',
    scale: 3,
  };

  html2canvas(DATA1!, {
    ignoreElements: (element) => {
      return element.classList.contains('no-pdf');
    },
  }).then((canvas) => {
    const img = canvas.toDataURL('image/PNG');
    const bufferX = 30;
    const bufferY = 30;
    const imgProps = (doc as any).getImageProperties(img);
    const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
    const pdfHeight = totalTableHeight + bufferY * 2;

    // Ajustar el tamaño de la página PDF para que se adapte a la tabla completa
    const pageHeight = doc.internal.pageSize.getHeight();
    const position = pdfHeight + bufferY * 2;
    if (position < totalTableHeight) {
      doc.addPage();
    }

    doc.addImage(
      img,
      'PNG',
      bufferX,
      bufferY,
      pdfWidth,
      pdfHeight,
      undefined,
      'FAST',
      0,
    );
    

    // Descargamos el PDF con ambas secciones
    doc.save(`${new Date().toISOString()}_boleta_de_atthes.pdf`);
  });
}
  // PARA MOSTRAR
  mostrar() {
    this.carrito.getClientesPedido(this.id).subscribe((res) => {
      this.cliente = res;
      // console.log(this.cliente);

      for (let items of this.cliente) {
        // console.log('is->', items);
        this.dato = items;
        this.clientes = items.carrito;
        this.suma = items.total;
        let fech = this.dato.fecha.toDate();
        console.log('xcxcx->',fech);
        this.fechas.push(fech);
      }
      
      //esta es la variable para que se ordene la fecha
      // console.log(this.fechas);
       let fecr = this.fechas.sort((a, b) => a.getTime() - b.getTime());
        // console.log('FEchas->',fecr); 
        for(let f of fecr){
          // console.log('www->', f);
          
          this.fech.push(f.toLocaleTimeString())
          // console.log('ultimi_>', this.fech);
      }
    });
    // this.reloadPage()

  }

// PARA RECARGAR LA PAGINA Y ACTUALIZAR
reloadPage() {
  this.router
  .navigateByUrl('boleta/' + this.id, { skipLocationChange: true })
  .then(() => {
    console.log(decodeURI(this._location.path()));

    this.router.navigate([decodeURI(this._location.path())]);
    this.carrito.getClientesPedido(this.id);
  });
  }

  // PARA MOSTRAR EL CARRITO O PEDIDOS DEL USUARIOS
  show() {
    const path = 'users';
    this.UserService.getUsers(path).subscribe((res) => {
      this.data = res;
      for (let info of this.data) {
        // console.log(info)
        if (this.id == info.id) {
          this.user_cliente = info;
          // console.log('Cliente -> ' + this.user_cliente);
          this.id_cliente = info.id;
          this.nombres = info.Nombres;
          this.apellidos = info.Apellidos;
        }
      }
      this.carrito.getMostrar(this.id).subscribe((res) => {
        this.car = res;
        // console.log('carritos' + this.car);
        let total = 0;
        for (let i = 0; i < this.car.length; i++) {
          //console.log('Al->',this.data[i].Costo);
          let sum: number = this.car[i].Cantidad * this.car[i].Costo;
          total += sum;
        }
        this.suma = total;
      });
    });
  }
}
