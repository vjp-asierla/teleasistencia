import {Component, Input, OnInit} from '@angular/core';
import {ITipoSituacion} from "../../../interfaces/i-tipo-situacion";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";
import {CargaDireccionService} from "../../../servicios/carga-direccion.service";
import {Router} from "@angular/router";
import {CargaTipoSituacionService} from "../../../servicios/carga-tipo-situacion.service";

@Component({
  selector: 'app-item-tipo-situacion, [app-item-tipo-situacion]',
  templateUrl: './item-tipo-situacion.component.html',
  styleUrls: ['./item-tipo-situacion.component.scss']
})
export class ItemTipoSituacionComponent implements OnInit {
  @Input() public tipo_situacion: ITipoSituacion;

  constructor(private cargaTipoSituaciones: CargaTipoSituacionService, private router: Router) { }

  ngOnInit(): void {
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

  //Modal para confirmar la eliminación de un elemento
  modalConfirmacion(): void {
    Swal.fire({
      title: environment.fraseEliminarModal,
      showCancelButton: true,
      confirmButtonColor: environment.colorAceptarModal,
      cancelButtonColor: environment.colorCancelarModal,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.eliminarTipoSituacion('situaciones')
      }
    })
  }
  eliminarTipoSituacion(ruta: string): void {
    this.cargaTipoSituaciones.eliminarTipoSituacion(this.tipo_situacion).subscribe(
      e => {
        this.router.navigateByUrl(ruta, {skipLocationChange: true}).then(() => {
          this.router.navigate([ruta+'/borrado/'+this.tipo_situacion.id]);
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
