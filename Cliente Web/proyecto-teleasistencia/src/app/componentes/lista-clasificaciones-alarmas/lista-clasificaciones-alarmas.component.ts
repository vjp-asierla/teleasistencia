import {Component, OnInit} from '@angular/core';
import {IClasificacionAlarma} from "../../interfaces/i-clasificacion-alarma";
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-lista-clasificaciones-alarmas',
  templateUrl: './lista-clasificaciones-alarmas.component.html',
  styleUrls: ['./lista-clasificaciones-alarmas.component.scss']
})

export class ListaClasificacionesAlarmasComponent implements OnInit {
  public clasificaciones_alarmas: IClasificacionAlarma[];

  constructor(private route: ActivatedRoute, private titleServide: Title) {
  }

  ngOnInit(): void {
    this.clasificaciones_alarmas = this.route.snapshot.data['clasificaciones_alarmas'];
    this.titleServide.setTitle('Clasificaciones alarmas');
  }
}
