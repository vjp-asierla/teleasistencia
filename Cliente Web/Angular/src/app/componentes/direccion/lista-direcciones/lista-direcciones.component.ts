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

  constructor(private route: ActivatedRoute, private titleService: Title, private filtradoTabla: OrdenacionTablasService) {
  }

  ngOnInit(): void {
    this.direcciones = this.route.snapshot.data['direcciones'];
    this.titleService.setTitle('Direcciones');
  }

  filtroTabla(indice: number, tipo: string){
    this.filtradoTabla.filtroService(indice, tipo);
  }

}

