import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {CargaViviendaService} from "../../../servicios/carga-vivienda.service";
import {ITipoVivienda} from "../../../interfaces/i-tipo-vivienda";

@Component({
  selector: 'app-modificar-tipo-vivienda',
  templateUrl: './modificar-tipo-vivienda.component.html',
  styleUrls: ['./modificar-tipo-vivienda.component.scss']
})
export class ModificarTipoViviendaComponent implements OnInit {
  public tipo_vivienda: ITipoVivienda;
  public idTipoVivienda: number;

  constructor(private route: ActivatedRoute, private titleService: Title, private cargaViviendas: CargaViviendaService, private router: Router) {
  }
  ngOnInit(): void {
    this.idTipoVivienda = this.route.snapshot.params['id'];
    this.tipo_vivienda = this.route.snapshot.data['tipo_vivienda'];
    this.titleService.setTitle('Modificar tipo vivienda ' + this.tipo_vivienda);
  }

  modificarTipoVivienda(): void {
    this.cargaViviendas.modificarTipoVivienda(this.tipo_vivienda).subscribe(
      e => {
        console.log('Vivienda ' + e.id + ' modificada');
        console.log(this.tipo_vivienda);
        this.router.navigate(['/viviendas']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
