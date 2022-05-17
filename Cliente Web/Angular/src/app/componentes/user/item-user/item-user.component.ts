import {Component, Input, OnInit} from '@angular/core';
import {IUsers} from '../../../interfaces/i-users';
import Swal from 'sweetalert2';
import {CargaDireccionService} from "../../../servicios/carga-direccion.service";
import {Router} from "@angular/router";
import {CargaUserService} from "../../../servicios/carga-user.service";
import {environment} from "../../../../environments/environment";


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
    this.user.pk = Number(this.user.url.substr(37));
  }
  //Toast para el Alert indicando que la operación fue exitosa
  alertExito() :void {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      //El tiempo que permanece la alerta, se obtiene mediante una variable global en environment.ts
      timer: environment.timerToast,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: environment.fraseEliminar,
    })
  }
  //Toast para el alert indicando que hubo algún error en la operación
  alertError() :void {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: environment.timerToast,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'error',
      title: environment.fraseErrorEliminar
    })
  }
  modalConfirmacion(): void {
    Swal.fire({
      title: '¿Está seguro que desea eliminar este usuario?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.eliminarUsuario('usuarios')
      }
    })
  }
  eliminarUsuario(ruta :string  ) : void{
    this.cargaUsuario.eliminarUsuario(this.user).subscribe(
      e=>{
        this.router.navigateByUrl(ruta+'/borrado/'+this.user.pk, {skipLocationChange: true}).then(() => {
          this.router.navigate([ruta]);
        });
          //Si el elemento se ha borrado con exito, llama al método que muestra el alert de Exito
          this.alertExito()

      },
      error => {
        //Si ha habido algún error al eliminar el elemento, llama al método que muestra el alert de Error
        this.alertError()
      }
    )
  }

}
