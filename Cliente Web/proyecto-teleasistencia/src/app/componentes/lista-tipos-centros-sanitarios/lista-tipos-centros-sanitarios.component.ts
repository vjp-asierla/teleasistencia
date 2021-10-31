import {Component, OnInit} from '@angular/core';
import {ITipoCentroSanitario} from '../../interfaces/i-tipo-centro-sanitario';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-lista-tipos-centros-sanitarios',
  templateUrl: './lista-tipos-centros-sanitarios.component.html',
  styleUrls: ['./lista-tipos-centros-sanitarios.component.scss']
})

export class ListaTiposCentrosSanitariosComponent implements OnInit {
  public tipos_centros_sanitarios: ITipoCentroSanitario[];

  constructor(private route: ActivatedRoute, private titleServide: Title) {
  }

  ngOnInit(): void {
    this.tipos_centros_sanitarios = this.route.snapshot.data['tipos_centros_sanitarios'];
    this.titleServide.setTitle('Tipos centros sanitarios');
  }
}
