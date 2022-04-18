import {Component, OnInit} from '@angular/core';
import {IClasificacionAlarma} from "../../interfaces/i-clasificacion-alarma";
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {FiltroTablasService} from "../../servicios/filtro-tablas.service";

@Component({
  selector: 'app-lista-clasificaciones-alarmas',
  templateUrl: './lista-clasificaciones-alarmas.component.html',
  styleUrls: ['./lista-clasificaciones-alarmas.component.scss']
})

export class ListaClasificacionesAlarmasComponent implements OnInit {
  public clasificaciones_alarmas: IClasificacionAlarma[];
  numPaginacion: number = 1;
  inputBusqueda: any = '';

  constructor(private route: ActivatedRoute, private titleService: Title, private filtradoTabla: FiltroTablasService) {
  }

  ngOnInit(): void {
    this.clasificaciones_alarmas = this.route.snapshot.data['clasificaciones_alarmas'];
    this.titleService.setTitle('Clasificaciones alarmas');
  }

  filtroTabla(indice: number, tipo: string){
    this.filtradoTabla.filtroService(indice, tipo);
  }
}
