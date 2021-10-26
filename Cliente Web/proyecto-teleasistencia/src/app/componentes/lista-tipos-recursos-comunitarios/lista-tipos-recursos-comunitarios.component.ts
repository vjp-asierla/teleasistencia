import {Component, OnInit} from '@angular/core';
import {ITipoRecursoComunitario} from "../../interfaces/i-tipo-recurso-comunitario";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-lista-tipos-recursos-comunitarios',
  templateUrl: './lista-tipos-recursos-comunitarios.component.html',
  styleUrls: ['./lista-tipos-recursos-comunitarios.component.scss']
})

export class ListaTiposRecursosComunitariosComponent implements OnInit {
  public tipos_recursos_comunitarios: ITipoRecursoComunitario[];

  constructor(private titleServide: Title, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.titleServide.setTitle('Tipos recursos comunitarios');
    this.tipos_recursos_comunitarios = this.route.snapshot.data['tipos_recursos_comunitarios'];
  }
}
