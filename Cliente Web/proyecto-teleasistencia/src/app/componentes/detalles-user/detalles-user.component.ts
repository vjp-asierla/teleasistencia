import {Component, OnInit} from '@angular/core';
import {IUsers} from "../../interfaces/i-users";
import {CargaServidorService} from "../../servicios/carga-servidor.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-detalles-user',
  templateUrl: './detalles-user.component.html',
  styleUrls: ['./detalles-user.component.scss']
})
export class DetallesUserComponent implements OnInit {
  user!: IUsers;
  idUser!: number;

  constructor(private route: ActivatedRoute, private titleServide: Title, private cargaUsers: CargaServidorService, private router: Router) {
  }

  ngOnInit(): void {
    this.idUser = this.route.snapshot.params['id'];
    this.user = this.route.snapshot.data['user'];
    this.titleServide.setTitle('Modificar ' + this.user.username);
  }

  modificarUser(): void {
    this.cargaUsers.modificarUser(this.user).subscribe(u => {
      console.log('User modificado');
      this.router.navigate(['/users']);
    });
  }

}
