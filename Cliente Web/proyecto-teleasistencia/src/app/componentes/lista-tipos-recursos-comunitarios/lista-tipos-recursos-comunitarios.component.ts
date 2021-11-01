import {Component, OnInit} from '@angular/core';
import {ITipoRecursoComunitario} from '../../interfaces/i-tipo-recurso-comunitario';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-lista-tipos-recursos-comunitarios',
  templateUrl: './lista-tipos-recursos-comunitarios.component.html',
  styleUrls: ['./lista-tipos-recursos-comunitarios.component.scss']
})

export class ListaTiposRecursosComunitariosComponent implements OnInit {
  public tipos_recursos_comunitarios: ITipoRecursoComunitario[];

  constructor(private route: ActivatedRoute, private titleServide: Title) {
  }

  ngOnInit(): void {
    this.tipos_recursos_comunitarios = this.route.snapshot.data['tipos_recursos_comunitarios'];
    this.titleServide.setTitle('Tipos recursos comunitarios');
  }
}
