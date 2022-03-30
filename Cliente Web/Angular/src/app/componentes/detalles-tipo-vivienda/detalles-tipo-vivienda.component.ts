import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {CargaViviendaService} from "../../servicios/carga-vivienda.service";
import {ITipoVivienda} from "../../interfaces/i-tipo-vivienda";

@Component({
  selector: 'app-detalles-tipo-vivienda',
  templateUrl: './detalles-tipo-vivienda.component.html',
  styleUrls: ['./detalles-tipo-vivienda.component.scss']
})
export class DetallesTipoViviendaComponent implements OnInit {
  public tipo_vivienda: ITipoVivienda;
  public idTipoVivienda: number;

  constructor(private titleService: Title, private route: ActivatedRoute, private router: Router, private cargarTiposVivienda: CargaViviendaService) { }

  ngOnInit(): void {
    this.idTipoVivienda = this.route.snapshot.params['id'];
    this.titleService.setTitle('Modificar tipo vivienda ' + this.idTipoVivienda);
    console.log(this.tipo_vivienda+'---'+this.titleService);
  }

  modificarTipoVivienda(): void {

  }

}
