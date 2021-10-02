import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {CargaUserService} from "../../servicios/carga-user.service";
import {IUsers} from "../../interfaces/i-users";
import {User} from "../../clases/user";

@Component({
  selector: 'app-nuevo-user',
  templateUrl: './nuevo-user.component.html',
  styleUrls: ['./nuevo-user.component.scss']
})
export class NuevoUserComponent implements OnInit {
  public user: IUsers;

  constructor(private route: ActivatedRoute, private titleServide: Title, private cargaUsers: CargaUserService, private router: Router) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.titleServide.setTitle('Crear nuevo usuario del sistema');
  }

  nuevoUser(): void {
    console.log(this.user);
    this.cargaUsers.nuevoUser(this.user).subscribe(u => {
      console.log('Usuario creado');
      this.router.navigate(['/usuarios']);
    });
  }
}
