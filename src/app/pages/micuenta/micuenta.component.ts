import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/interface/users';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-micuenta',
  templateUrl: './micuenta.component.html',
  styleUrls: ['./micuenta.component.css']
})
export class MicuentaComponent implements OnInit {

  name=""
  datos!:Users[]
  constructor(private router:ActivatedRoute, private user:UserService){}

  ngOnInit():void{
    const path = 'users'
    this.name = String(this.router.snapshot.paramMap.get('name'))
    this.user.getUsers(path).subscribe(res => {
      this.datos = res
    })
  }
}
