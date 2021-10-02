import {Component, OnInit} from '@angular/core';
import {ITipoModalidadPaciente} from "../../interfaces/i-tipo-modalidad-paciente";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {CargaTipoModalidadPacienteService} from "../../servicios/carga-tipo-modalidad-paciente.service";
import {TipoModalidadPaciente} from "../../clases/tipo-modalidad-paciente";

@Component({
  selector: 'app-nuevo-tipo-modalidad-paciente',
  templateUrl: './nuevo-tipo-modalidad-paciente.component.html',
  styleUrls: ['./nuevo-tipo-modalidad-paciente.component.scss']
})
export class NuevoTipoModalidadPacienteComponent implements OnInit {
  public tipo_modalidad_paciente: ITipoModalidadPaciente;

  constructor(private route: ActivatedRoute, private titleServide: Title, private cargaTiposModalidadesPacientes: CargaTipoModalidadPacienteService, private router: Router) {
    this.tipo_modalidad_paciente = new TipoModalidadPaciente();
  }

  ngOnInit(): void {
    this.titleServide.setTitle('Crear nuevo tipo modalidad paciente');
  }

  nuevoTipoModalidadPaciente(): void {
    console.log(this.tipo_modalidad_paciente);
    this.cargaTiposModalidadesPacientes.nuevoTipoModalidadPaciente(this.tipo_modalidad_paciente).subscribe(u => {
      console.log('Tipo modalidad paciente creado');
      this.router.navigate(['/tipos_modalidades_pacientes']);
    });
  }

}
