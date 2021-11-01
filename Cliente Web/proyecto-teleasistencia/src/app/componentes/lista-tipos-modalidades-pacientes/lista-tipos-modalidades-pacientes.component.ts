import {Component, OnInit} from '@angular/core';
import {ITipoModalidadPaciente} from '../../interfaces/i-tipo-modalidad-paciente';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-lista-tipos-modalidades-pacientes',
  templateUrl: './lista-tipos-modalidades-pacientes.component.html',
  styleUrls: ['./lista-tipos-modalidades-pacientes.component.scss']
})

export class ListaTiposModalidadesPacientesComponent implements OnInit {
  public tipos_modalidades_pacientes: ITipoModalidadPaciente[];

  constructor(private route: ActivatedRoute, private titleServide: Title) {
  }

  ngOnInit(): void {
    this.tipos_modalidades_pacientes = this.route.snapshot.data['tipos_modalidades_pacientes'];
    this.titleServide.setTitle('Tipos modalidades pacientes');
  }
}
