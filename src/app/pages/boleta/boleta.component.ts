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
  selector: 'app-boleta',
  templateUrl: './boleta.component.html',
  styleUrls: ['./boleta.component.css']
})
export class BoletaComponent {
  @ViewChild('tabla', { static: false })
  tabla!: ElementRef;

  data!:Users[]
  suma=0
  car!:Car[]
  id=""
  uid=""
  nombres=""
  apellidos=""
  descripcion=""
  login: boolean = false
  constructor(
    private ZapaService: ZapatillasService, 
    private UserService:UserService,
    private carrito: CarService,
    private aut:AuthService,
    private route:ActivatedRoute,
    private router:Router){
      
      this.aut.statusUser().subscribe(res => {
        if (res) {
          console.log("Estado ->",res);
          console.log('esta logeado');
          console.log('UID->', res.uid);
          this.uid = res.uid
          this.login = true
        } else {
          console.log('No esta logeado');
          this.login = false
        }
      })
    }
  
  ngOnInit():void{
    const path='users'
    this.id = String(this.route.snapshot.paramMap.get('id'))
    this.UserService.getUsers(path).subscribe(res =>{
      this.data = res
    })
    this.show()
    
  }

  imprimir(){
  
     const doc = new jsPDF('p','pt','a4');
     document.querySelectorAll('#tabla');
     doc.save('Boleta de atthes')
    // const DATA: any = document.getElementById('tabla');
    // const DATA: any = document.querySelectorAll("#tabla");
    // const doc = new jsPDF('p','pt','a4');
    // const options = {
    //   background: 'white',
    //   scale: 3
    // };

    // html2canvas(DATA, options)
    // .then((canvas) => {
    //   const img = canvas.toDataURL('image/PNG');

    //     // Add image Canvas to PDF
    //   const bufferX = 15;
    //   const bufferY = 15;
    //   const imgProps = (doc as any).getImageProperties(img);
    //   const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
    //   const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    //   doc.addImage(
    //     img, 
    //     'PNG',
    //     bufferX, 
    //     bufferY,
    //     pdfWidth, 
    //     pdfHeight, 
    //     undefined,
    //     'FAST');
    //   return doc;
    // })
    // .then((docResult) => {
    //   docResult.save(`${new Date().toISOString()}_tutorial.pdf`);
    // });

    }

    //  doc.text('tabla' ,10,10);
    //  doc.save('Boleta de atthes')
    // html2canvas(this.tabla.nativeElement).then(canvas => {
    //   const imgData = canvas.toDataURL('image/png');
    //   const imgWidth = 210; // Anchura de la página A4 (en mm)
    //   const pageHeight = 295; // Altura de la página A4 (en mm)
    //   const imgHeight = canvas.height * imgWidth / canvas.width;
    //   let position = 0;

    //   doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    //   position = imgHeight;

    //   doc.save('boleta factura.pdf');
    // const doc = new jsPDF();

    // const table = document.getElementById('tabla');

    
    // doc.html (document.getElementById('tabla'),10);
    // doc.save('Factura Atthes');
    // Extraemos el
    // const DATA: HTMLElement | null = document.getElementById('tabla');
    // const doc = new jsPDF('p', 'pt', 'a4');
    // const options = {
    //   background: 'white',
    //   scale: 3
    // };
    // html2canvas(DATA, options).then((canvas) => {

    //   const img = canvas.toDataURL('image/PNG');

    //   // Add image Canvas to PDF
    //   const bufferX = 15;
    //   const bufferY = 15;
    //   const imgProps = (doc as any).getImageProperties(img);
    //   const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
    //   const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    //   doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
    //   return doc;
    // }).then((docResult) => {
    //   docResult.save(`${new Date().toISOString()}_tutorial.pdf`);
    // });
  // });

  

  

  show(){
    const path='users'
    this.UserService.getUsers(path).subscribe(res =>{
      this.data = res
      for(let info of this.data){
        console.log(info)
        if(this.id == info.id){
          this.nombres = info.Nombres
          this.apellidos = info.Apellidos
        }
      }
      this.carrito.getCar().subscribe(res =>{
        this.car = res
        console.log(this.car)
        for(let desc of this.car){
          const suma=desc.Cantidad*desc.Costo
          this.suma +=suma
        }
        return this.suma
      })
    }
    )
  }
  

}
