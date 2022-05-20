import {Component, Input, OnInit} from '@angular/core';
import {ITipoModalidadPaciente} from '../../../interfaces/i-tipo-modalidad-paciente';
import Swal from "sweetalert2";
import {CargaTipoCentroSanitarioService} from "../../../servicios/carga-tipo-centro-sanitario.service";
import {CargaTipoModalidadPacienteService} from "../../../servicios/carga-tipo-modalidad-paciente.service";
import {environment} from "../../../../environments/environment";
import {Route, Router} from "@angular/router";


@Component({
  selector: 'app-item-tipo-modalidad-paciente, [app-item-tipo-modalidad-paciente]',
  templateUrl: './item-tipo-modalidad-paciente.component.html',
  styleUrls: ['./item-tipo-modalidad-paciente.component.scss']
})

export class ItemTipoModalidadPacienteComponent implements OnInit {
  @Input() public tipo_modalidad_paciente: ITipoModalidadPaciente;

  constructor(private cargaModalidadPaciente: CargaTipoModalidadPacienteService, private router: Router) {
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
      title: '¿Está seguro que desea eliminar este tipo de modalidad de paciente?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.eliminarTipoModalidadPaciente('tipos_modalidades_pacientes')
      }
    })
  }
  eliminarTipoModalidadPaciente(ruta:string) : void{
    this.cargaModalidadPaciente.eliminarTipoModalidadPaciente(this.tipo_modalidad_paciente).subscribe(
      e=>{
        this.router.navigateByUrl(ruta+'/borrado/'+this.tipo_modalidad_paciente.id, {skipLocationChange: true}).then(() => {
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
