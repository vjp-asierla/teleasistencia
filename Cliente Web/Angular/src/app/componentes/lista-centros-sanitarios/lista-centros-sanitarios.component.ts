import {Component, OnInit} from '@angular/core';
import {ICentroSanitario} from '../../interfaces/i-centro-sanitario';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {FiltroTablasService} from "../../servicios/filtro-tablas.service";

@Component({
  selector: 'app-lista-centros-sanitarios',
  templateUrl: './lista-centros-sanitarios.component.html',
  styleUrls: ['./lista-centros-sanitarios.component.scss']
})

export class ListaCentrosSanitariosComponent implements OnInit {
  public centros_sanitarios: ICentroSanitario[];
  numPaginacion: number = 1;
  inputBusqueda: any = '';

  constructor(private route: ActivatedRoute, private titleService: Title, private filtradoTabla: FiltroTablasService) {
  }

  ngOnInit(): void {
    this.centros_sanitarios = this.route.snapshot.data['centros_sanitarios'];
    this.titleService.setTitle('Centros sanitarios');
  }

  filtroTabla(indice: number, tipo: string){
    this.filtradoTabla.filtroService(indice, tipo);
  }
}
