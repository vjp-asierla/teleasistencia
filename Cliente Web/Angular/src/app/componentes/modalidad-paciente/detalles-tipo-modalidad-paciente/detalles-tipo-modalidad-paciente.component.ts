import {Component, OnInit} from '@angular/core';
import {ITipoModalidadPaciente} from '../../../interfaces/i-tipo-modalidad-paciente';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {CargaTipoModalidadPacienteService} from '../../../servicios/modalidad-paciente/carga-tipo-modalidad-paciente.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-detalles-tipo-modalidad-paciente',
  templateUrl: './detalles-tipo-modalidad-paciente.component.html',
  styleUrls: ['./detalles-tipo-modalidad-paciente.component.scss']
})

export class DetallesTipoModalidadPacienteComponent implements OnInit {
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
        console.log('Tipo modalidad paciente ' + e.id + ' modificado');
        console.log(this.tipo_modalidad_paciente);
        this.router.navigate(['/tipos_modalidades_pacientes']);
      },
      error => {
        console.log(error);
      }
    );
  }
  ejecutarAlerta() :void{
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'Tipo de Modalidad de Paciente Modificado Correctamente'
    })

  }
}
