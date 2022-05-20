import {Component, OnInit} from '@angular/core';
import {ITipoModalidadPaciente} from '../../../interfaces/i-tipo-modalidad-paciente';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {CargaTipoModalidadPacienteService} from '../../../servicios/carga-tipo-modalidad-paciente.service';
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";


@Component({
  selector: 'app-modificar-tipo-modalidad-paciente',
  templateUrl: './modificar-tipo-modalidad-paciente.component.html',
  styleUrls: ['./modificar-tipo-modalidad-paciente.component.scss']
})

export class ModificarTipoModalidadPacienteComponent implements OnInit {
  public tipo_modalidad_paciente: ITipoModalidadPaciente;
  public idTipoModalidadPaciente: number;

  constructor(private route: ActivatedRoute, private titleService: Title, private cargaTiposModalidadesPacientes: CargaTipoModalidadPacienteService, private router: Router) {
  }

  ngOnInit(): void {
    this.tipo_modalidad_paciente = this.route.snapshot.data['tipo_modalidad_paciente'];
    this.idTipoModalidadPaciente = this.route.snapshot.params['id'];
    this.titleService.setTitle('Modificar tipo modalidad paciente ' + this.idTipoModalidadPaciente);
  }

  modificarTipoModalidadPaciente(): void {
    this.cargaTiposModalidadesPacientes.modificarTipoModalidadPaciente(this.tipo_modalidad_paciente).subscribe(
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
      title: environment.fraseModificar,
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
      title: environment.fraseErrorModificar
    })
  }

}
