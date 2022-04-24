import { Component, OnInit } from '@angular/core';
import {ITipoVivienda} from "../../../interfaces/i-tipo-vivienda";
import {ActivatedRoute} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {FiltroTablasService} from "../../../servicios/filtro-tablas.service";

@Component({
  selector: 'app-lista-tipos-vivienda',
  templateUrl: './lista-tipos-vivienda.component.html',
  styleUrls: ['./lista-tipos-vivienda.component.scss']
})
export class ListaTiposViviendaComponent implements OnInit {
  public tipos_viviendas: ITipoVivienda[];
  numPaginacion: number = 1;
  inputBusqueda: any = '';

  constructor(private route: ActivatedRoute, private titleService: Title, private filtradoTabla: FiltroTablasService) {
  }

  ngOnInit(): void {
    this.tipos_viviendas = this.route.snapshot.data['tipos_viviendas'];
    this.titleService.setTitle('Tipos viviendas');
  }

  filtroTabla(indice: number, tipo: string){
    this.filtradoTabla.filtroService(indice, tipo);
  }

}
