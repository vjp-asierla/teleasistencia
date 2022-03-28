import { Component, OnInit } from '@angular/core';
import {ITipoVivienda} from "../../interfaces/i-tipo-vivienda";
import {ActivatedRoute} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-lista-tipos-vivienda',
  templateUrl: './lista-tipos-vivienda.component.html',
  styleUrls: ['./lista-tipos-vivienda.component.scss']
})
export class ListaTiposViviendaComponent implements OnInit {
  public tipos_viviendas: ITipoVivienda[];
  numPaginacion: number = 1;


  constructor(private route: ActivatedRoute, private titleService: Title) { }

  ngOnInit(): void {
    this.tipos_viviendas = this.route.snapshot.data['tipos_vivienda'];
    this.titleService.setTitle('Tipos viviendas');

  }

}
