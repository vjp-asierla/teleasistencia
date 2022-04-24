import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CargaTipoSituacionService} from "../../../servicios/carga-tipo-situacion.service";
import {ITipoSituacion} from "../../../interfaces/i-tipo-situacion";

@Component({
  selector: 'app-borrar-tipo-situacion',
  templateUrl: './borrar-tipo-situacion.component.html',
  styleUrls: ['./borrar-tipo-situacion.component.scss']
})
export class BorrarTipoSituacionComponent implements OnInit {
  public tipos_situaciones: ITipoSituacion;

  constructor(private route: ActivatedRoute, private cargaSituaciones: CargaTipoSituacionService, private router: Router) { }

  ngOnInit(): void {
    this.tipos_situaciones = this.route.snapshot.data['tipos_situaciones'];
  }

  borrarTipoSituacion(): void {
    this.cargaSituaciones.borrarSituacion(this.tipos_situaciones).subscribe(
      e => {
        console.log(this.tipos_situaciones);
        this.router.navigate(['/situaciones']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
