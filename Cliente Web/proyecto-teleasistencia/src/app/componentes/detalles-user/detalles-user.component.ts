import {Component, OnInit} from '@angular/core';
import {IUsers} from "../../interfaces/i-users";
import {CargaUserService} from "../../servicios/carga-user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-detalles-user',
  templateUrl: './detalles-user.component.html',
  styleUrls: ['./detalles-user.component.scss']
})
export class DetallesUserComponent implements OnInit {
  public user: IUsers;
  public idUser: number;

  constructor(private route: ActivatedRoute, private titleServide: Title, private cargaUsers: CargaUserService, private router: Router) {
  }

  ngOnInit(): void {
    this.idUser = this.route.snapshot.params['id'];
    this.user = this.route.snapshot.data['user'];
    this.titleServide.setTitle('Modificar usuario ' + this.idUser);
  }

  modificarUser(): void {
    console.log(this.user);
    this.cargaUsers.modificarUser(this.user).subscribe(u => {
      console.log('User modificado');
      this.router.navigate(['/usuarios']);
    });
  }

}
