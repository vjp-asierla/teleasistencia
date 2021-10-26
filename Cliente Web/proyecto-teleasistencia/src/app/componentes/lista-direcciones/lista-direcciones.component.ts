import {Component, OnInit} from '@angular/core';
import {IDireccion} from "../../interfaces/i-direccion";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-lista-direcciones',
  templateUrl: './lista-direcciones.component.html',
  styleUrls: ['./lista-direcciones.component.scss']
})

export class ListaDireccionesComponent implements OnInit {
  public direcciones: IDireccion[];

  constructor(private titleServide: Title, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.titleServide.setTitle('Direcciones');
    this.direcciones = this.route.snapshot.data['direcciones'];
  }
}
