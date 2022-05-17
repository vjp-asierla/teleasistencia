import {Component, Input, OnInit} from '@angular/core';
import {ITipoCentroSanitario} from '../../../interfaces/i-tipo-centro-sanitario';
import Swal from "sweetalert2";
import {CargaCentroSanitarioService} from "../../../servicios/carga-centro-sanitario.service";
import {CargaTipoCentroSanitarioService} from "../../../servicios/carga-tipo-centro-sanitario.service";
import {environment} from "../../../../environments/environment";
import {Router} from "@angular/router";


@Component({
  selector: 'app-item-tipo-centro-sanitario, [app-item-tipo-centro-sanitario]',
  templateUrl: './item-tipo-centro-sanitario.component.html',
  styleUrls: ['./item-tipo-centro-sanitario.component.scss']
})

export class ItemTipoCentroSanitarioComponent implements OnInit {
  @Input() public tipo_centro_sanitario: ITipoCentroSanitario;

  constructor(private cargaTipoCentroSanitario: CargaTipoCentroSanitarioService, private router:Router) {
  }

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

  modalConfirmacion(): void {
    Swal.fire({
      title: '¿Está seguro que desea eliminar este tipo de centro sanitario?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.eliminarTipoCentroSanitario('tipos_centros_sanitarios')
      }
    })
  }
  eliminarTipoCentroSanitario(ruta: string) : void{
    this.cargaTipoCentroSanitario.eliminarTipoCentroSanitario(this.tipo_centro_sanitario).subscribe(
      e=>{
        this.router.navigateByUrl(ruta+'/borrado/'+this.tipo_centro_sanitario.id, {skipLocationChange: true}).then(() => {
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
