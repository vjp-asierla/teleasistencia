import {Component, OnInit} from '@angular/core';
import {IDireccion} from '../../../interfaces/i-direccion';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {OrdenacionTablasService} from "../../../servicios/ordenacion-tablas.service";

@Component({
  selector: 'app-lista-direcciones',
  templateUrl: './lista-direcciones.component.html',
  styleUrls: ['./lista-direcciones.component.scss']
})

export class ListaDireccionesComponent implements OnInit {
  public direcciones: IDireccion[];
  numPaginacion: number = 1;
  inputBusqueda: any = '';

  constructor(private route: ActivatedRoute, private titleService: Title, private ordTabla: OrdenacionTablasService) {
  }

  ngOnInit(): void {
    this.direcciones = this.route.snapshot.data['direcciones'];
    this.titleService.setTitle('Direcciones');
  }

  ordenacionTabla(indice: number, tipo: string){
    this.ordTabla.ordenacionService(indice, tipo);
  }

}

