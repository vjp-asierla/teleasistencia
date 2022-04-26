import {Component, Input, OnInit} from '@angular/core';
import {IUsers} from '../../../interfaces/i-users';
import Swal from 'sweetalert2';
import {CargaDireccionService} from "../../../servicios/direccion/carga-direccion.service";
import {Router} from "@angular/router";
import {CargaUserService} from "../../../servicios/user/carga-user.service";

@Component({
  selector: 'app-item-user, [app-item-user]',
  templateUrl: './item-user.component.html',
  styleUrls: ['./item-user.component.scss']
})

export class ItemUserComponent implements OnInit {
  @Input() public user: IUsers;

  constructor(private cargaUsuario: CargaUserService,private router: Router) {
  }

  ngOnInit(): void {
    this.user.id = Number(this.user.url.substr(37));
  }
  modalConfirmacion(): void {
    Swal.fire({
      title: '¿Está seguro que desea eliminar este usuario?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.eliminarUsuario()
      }
    })
  }
  eliminarUsuario() : void{
    this.cargaUsuario.eliminarUsuario(this.user).subscribe(
      e=>{
        console.log(this.user);
        console.log('Usuario ' + this.user.id + ' eliminado');
      },
      error => {
        console.log(error);
      }
    )
  }
}
