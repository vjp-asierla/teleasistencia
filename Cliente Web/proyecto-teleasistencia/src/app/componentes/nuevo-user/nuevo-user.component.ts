import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {CargaServidorService} from "../../servicios/carga-servidor.service";
import {IUsers} from "../../interfaces/i-users";

@Component({
  selector: 'app-nuevo-user',
  templateUrl: './nuevo-user.component.html',
  styleUrls: ['./nuevo-user.component.scss']
})
export class NuevoUserComponent implements OnInit {
  user: IUsers = new class implements IUsers {
    email!: string;
    groups!: [];
    id!: number;
    url!: string;
    username!: string;
  }

  constructor(private titleServide: Title, private cargaUsers: CargaServidorService, private router: Router) { }

  ngOnInit(): void {
    this.titleServide.setTitle('Crear nuevo usuario del sistema');
  }

  nuevoUser(): void {
    this.cargaUsers.nuevoUser(this.user).subscribe(u => {
      console.log('User creado');
      this.router.navigate(['/users']);
    });
  }
}
