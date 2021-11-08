import {Component, OnInit} from '@angular/core';
import {IDireccion} from '../../interfaces/i-direccion';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-lista-direcciones',
  templateUrl: './lista-direcciones.component.html',
  styleUrls: ['./lista-direcciones.component.scss']
})

export class ListaDireccionesComponent implements OnInit {
  public direcciones: IDireccion[];

  constructor(private route: ActivatedRoute, private titleService: Title) {
  }

  ngOnInit(): void {
    this.direcciones = this.route.snapshot.data['direcciones'];
    this.titleService.setTitle('Direcciones');
  }
}
