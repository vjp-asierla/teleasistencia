import {Component, OnInit} from '@angular/core';
import {IUsers} from "../../interfaces/i-users";
import {Title} from "@angular/platform-browser";
import {CargaUserService} from "../../servicios/carga-user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detalles-user',
  templateUrl: './detalles-user.component.html',
  styleUrls: ['./detalles-user.component.scss']
})

export class DetallesUserComponent implements OnInit {
  public user: IUsers;
  public idUser: number;

  constructor(private titleServide: Title, private route: ActivatedRoute, private cargaUsers: CargaUserService, private router: Router) {
  }

  ngOnInit(): void {
    this.titleServide.setTitle('Modificar usuario ' + this.idUser);
    this.user = this.route.snapshot.data['user'];
    this.idUser = this.route.snapshot.params['id'];
  }

  modificarUser(): void {
    console.log(this.user);
    this.cargaUsers.modificarUser(this.user).subscribe(
      e => {
        console.log('User ' + e.id + ' modificado');
        this.router.navigate(['/usuarios']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
