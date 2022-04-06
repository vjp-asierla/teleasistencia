import { Component, OnInit } from '@angular/core';
import {ITipoSituacion} from "../../interfaces/i-tipo-situacion";
import {ActivatedRoute} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {FiltroTablasService} from "../../servicios/filtro-tablas.service";

@Component({
  selector: 'app-lista-tipos-situacion',
  templateUrl: './lista-tipos-situacion.component.html',
  styleUrls: ['./lista-tipos-situacion.component.scss']
})
export class ListaTiposSituacionComponent implements OnInit {
  public tipos_situaciones: ITipoSituacion[];
  numPaginacion: number = 1;
  inputBusqueda: any = '';

  constructor(private route: ActivatedRoute, private titleService: Title, private filtradoTabla: FiltroTablasService) {
  }

  ngOnInit(): void {
    this.tipos_situaciones = this.route.snapshot.data['tipos_situaciones'];
    this.titleService.setTitle('Tipos situaciones de pacientes');
  }

  filtroTabla(indice: number, tipo: string){
    this.filtradoTabla.filtroService(indice, tipo);
  }

}
