import {Component, OnInit} from '@angular/core';
import {ITipoModalidadPaciente} from '../../../interfaces/i-tipo-modalidad-paciente';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {FiltroTablasService} from "../../../servicios/filtro-tablas.service";

@Component({
  selector: 'app-lista-tipos-modalidades-pacientes',
  templateUrl: './lista-tipos-modalidades-pacientes.component.html',
  styleUrls: ['./lista-tipos-modalidades-pacientes.component.scss']
})

export class ListaTiposModalidadesPacientesComponent implements OnInit {
  public tipos_modalidades_pacientes: ITipoModalidadPaciente[];
  numPaginacion: number = 1;
  inputBusqueda: any = '';

  constructor(private route: ActivatedRoute, private titleService: Title, private filtradoTabla: FiltroTablasService) {
  }

  ngOnInit(): void {
    this.tipos_modalidades_pacientes = this.route.snapshot.data['tipos_modalidades_pacientes'];
    this.titleService.setTitle('Tipos situaciones pacientes');
  }

  filtroTabla(indice: number, tipo: string){
    this.filtradoTabla.filtroService(indice, tipo);
  }

}
