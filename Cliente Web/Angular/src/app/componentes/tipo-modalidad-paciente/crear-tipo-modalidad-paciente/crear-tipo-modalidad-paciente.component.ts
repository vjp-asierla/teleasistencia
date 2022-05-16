import {Component, OnInit} from '@angular/core';
import {ITipoModalidadPaciente} from '../../../interfaces/i-tipo-modalidad-paciente';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {CargaTipoModalidadPacienteService} from '../../../servicios/carga-tipo-modalidad-paciente.service';
import {TipoModalidadPaciente} from '../../../clases/tipo-modalidad-paciente';
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";


@Component({
  selector: 'app-crear-tipo-modalidad-paciente',
  templateUrl: './crear-tipo-modalidad-paciente.component.html',
  styleUrls: ['./crear-tipo-modalidad-paciente.component.scss']
})

export class CrearTipoModalidadPacienteComponent implements OnInit {
  public tipo_modalidad_paciente: ITipoModalidadPaciente;

  constructor(private titleService: Title, private route: ActivatedRoute, private cargaTiposModalidadesPacientes: CargaTipoModalidadPacienteService, private router: Router) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Nuevo tipo modalidad paciente');
    this.tipo_modalidad_paciente = new TipoModalidadPaciente();
  }

  nuevoTipoModalidadPaciente(): void {
    this.cargaTiposModalidadesPacientes.nuevoTipoModalidadPaciente(this.tipo_modalidad_paciente).subscribe(
      e => {
        this.alertExito()
        this.router.navigate(['/tipos_modalidades_pacientes']);
      },
      error => {
        this.alertError()
      }
    );
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
      title: environment.fraseCrear,
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
      title: environment.fraseErrorCrear
    })
  }
}
