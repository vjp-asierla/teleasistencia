import { Component, OnInit } from '@angular/core';
import {ITipoSituacion} from "../../interfaces/i-tipo-situacion";
import {ActivatedRoute} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-lista-tipos-situacion',
  templateUrl: './lista-tipos-situacion.component.html',
  styleUrls: ['./lista-tipos-situacion.component.scss']
})
export class ListaTiposSituacionComponent implements OnInit {
  public tipos_situaciones: ITipoSituacion[];

  constructor(private route: ActivatedRoute, private titleService: Title) { }

  ngOnInit(): void {
    this.tipos_situaciones = this.route.snapshot.data['situaciones'];
    this.titleService.setTitle('Tipos situaciones de pacientes');
  }

}
