import {Component, OnInit} from '@angular/core';
import {IClasificacionAlarma} from "../../interfaces/i-clasificacion-alarma";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-lista-clasificaciones-alarmas',
  templateUrl: './lista-clasificaciones-alarmas.component.html',
  styleUrls: ['./lista-clasificaciones-alarmas.component.scss']
})

export class ListaClasificacionesAlarmasComponent implements OnInit {
  public clasificaciones_alarmas: IClasificacionAlarma[];

  constructor(private titleServide: Title, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.titleServide.setTitle('Clasificaciones alarmas');
    this.clasificaciones_alarmas = this.route.snapshot.data['clasificaciones_alarmas'];
  }
}
