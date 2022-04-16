import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CargaTipoSituacionService} from "../../servicios/carga-tipo-situacion.service";
import {ITipoSituacion} from "../../interfaces/i-tipo-situacion";

@Component({
  selector: 'app-borrar-tipo-situacion',
  templateUrl: './borrar-tipo-situacion.component.html',
  styleUrls: ['./borrar-tipo-situacion.component.scss']
})
export class BorrarTipoSituacionComponent implements OnInit {
  public tipo_situacion: ITipoSituacion;

  constructor(private route: ActivatedRoute, private cargaSituaciones: CargaTipoSituacionService, private router: Router) { }

  ngOnInit(): void {
    this.tipo_situacion = this.route.snapshot.data['tipo_situacion'];
  }

  borrarTipoSituacion(): void {
    this.cargaSituaciones.borrarSituacion(this.tipo_situacion).subscribe(
      e => {
        console.log(this.tipo_situacion);
        this.router.navigate(['/situaciones']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
