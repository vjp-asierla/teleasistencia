import {Component, OnInit} from '@angular/core';
import {ITipoModalidadPaciente} from "../../interfaces/i-tipo-modalidad-paciente";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-lista-tipos-modalidades-pacientes',
  templateUrl: './lista-tipos-modalidades-pacientes.component.html',
  styleUrls: ['./lista-tipos-modalidades-pacientes.component.scss']
})

export class ListaTiposModalidadesPacientesComponent implements OnInit {
  public tipos_modalidades_pacientes: ITipoModalidadPaciente[];

  constructor(private titleServide: Title, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.titleServide.setTitle('Tipos modalidades pacientes');
    this.tipos_modalidades_pacientes = this.route.snapshot.data['tipos_modalidades_pacientes'];
  }
}
