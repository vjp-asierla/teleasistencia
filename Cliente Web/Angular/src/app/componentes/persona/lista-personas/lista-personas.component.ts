import {Component, OnInit} from '@angular/core';
import {IPersona} from '../../../interfaces/i-persona';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {FiltroTablasService} from "../../../servicios/filtro-tablas.service";

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.scss']
})

export class ListaPersonasComponent implements OnInit {
  public personas: IPersona[];
  numPaginacion: number = 1;
  inputBusqueda: any = '';

  constructor(private route: ActivatedRoute, private titleService: Title, private filtradoTabla: FiltroTablasService) {
  }

  ngOnInit(): void {
    this.personas = this.route.snapshot.data['personas'];
    this.titleService.setTitle('Personas');
  }

  filtroTabla(indice: number, tipo: string){
    this.filtradoTabla.filtroService(indice, tipo);
  }
}
