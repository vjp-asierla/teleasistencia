import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {IDireccion} from '../../../interfaces/i-direccion';
import {CargaDireccionService} from "../../../servicios/direccion/carga-direccion.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import Swal from 'sweetalert2';
import {environment} from "../../../../environments/environment";
@Component({
  selector: 'app-item-direccion, [app-item-direccion]',
  templateUrl: './item-direccion.component.html',
  styleUrls: ['./item-direccion.component.scss']
})

export class ItemDireccionComponent implements OnInit {
  @Input() public direccion: IDireccion;
  private pulsedDirection: IDireccion = null;

  constructor(private cargaDirecciones: CargaDireccionService, private router: Router, private route: ActivatedRoute, private titleService: Title) {
  }

  ngOnInit(): void {
  }

  mensajeExito() :void {
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
      icon: 'success',
      title: environment.fraseEliminar,
    })
  }
  mensajeError() :void {
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
      title: '¿Está seguro que desea eliminar esta dirección?',
      showCancelButton: true,
      confirmButtonColor: environment.colorAceptarModal,
      cancelButtonColor: environment.colorCancelarModal,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.eliminarDireccion('direcciones')
   }
    })
  }


  eliminarDireccion(ruta: string): void {
    this.cargaDirecciones.eliminarDireccion(this.direccion).subscribe(
      e => {
        this.router.navigateByUrl(ruta, {skipLocationChange: true}).then(() => {
          this.router.navigate([ruta+'/borrado/'+this.direccion.id]);
        });
        this.mensajeExito()

      },
      error => {
        this.mensajeError()
      }
    )
  }
}





