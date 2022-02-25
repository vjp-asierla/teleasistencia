import {Component, OnInit} from '@angular/core';
import {ITipoModalidadPaciente} from '../../interfaces/i-tipo-modalidad-paciente';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {CargaTipoModalidadPacienteService} from '../../servicios/carga-tipo-modalidad-paciente.service';
import {TipoModalidadPaciente} from '../../clases/tipo-modalidad-paciente';

@Component({
  selector: 'app-nuevo-tipo-modalidad-paciente',
  templateUrl: './nuevo-tipo-modalidad-paciente.component.html',
  styleUrls: ['./nuevo-tipo-modalidad-paciente.component.scss']
})

export class NuevoTipoModalidadPacienteComponent implements OnInit {
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
        console.log('Tipo modalidad paciente creado');
        console.log(this.tipo_modalidad_paciente);
        this.router.navigate(['/tipos_modalidades_pacientes']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
