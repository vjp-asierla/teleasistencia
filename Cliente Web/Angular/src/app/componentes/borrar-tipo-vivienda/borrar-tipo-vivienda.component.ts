import { Component, OnInit } from '@angular/core';
import {ITipoVivienda} from "../../interfaces/i-tipo-vivienda";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {CargaViviendaService} from "../../servicios/carga-vivienda.service";

@Component({
  selector: 'app-borrar-tipo-vivienda',
  templateUrl: './borrar-tipo-vivienda.component.html',
  styleUrls: ['./borrar-tipo-vivienda.component.scss']
})
export class BorrarTipoViviendaComponent implements OnInit {
  public tipo_vivienda: ITipoVivienda;


  constructor(private route: ActivatedRoute, private cargaViviendas: CargaViviendaService, private router: Router) { }

  ngOnInit(): void {
    this.tipo_vivienda = this.route.snapshot.data['tipo_vivienda'];
  }

  borrarTipoVivienda(): void {
    this.cargaViviendas.borrarVivienda(this.tipo_vivienda).subscribe(
      e => {
        console.log(this.tipo_vivienda);
        this.router.navigate(['/viviendas']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
