import {Component, OnInit} from '@angular/core';
import {ICentroSanitario} from '../../interfaces/i-centro-sanitario';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-lista-centros-sanitarios',
  templateUrl: './lista-centros-sanitarios.component.html',
  styleUrls: ['./lista-centros-sanitarios.component.scss']
})

export class ListaCentrosSanitariosComponent implements OnInit {
  public centros_sanitarios: ICentroSanitario[];

  constructor(private route: ActivatedRoute, private titleServide: Title) {
  }

  ngOnInit(): void {
    this.centros_sanitarios = this.route.snapshot.data['centros_sanitarios'];
    this.titleServide.setTitle('Centros sanitarios');
  }
}
