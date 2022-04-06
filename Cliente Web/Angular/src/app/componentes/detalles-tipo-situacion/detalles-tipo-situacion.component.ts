import { Component, OnInit } from '@angular/core';
import {ITipoSituacion} from "../../interfaces/i-tipo-situacion";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {CargaTipoSituacionService} from "../../servicios/carga-tipo-situacion.service";

@Component({
  selector: 'app-detalles-tipo-situacion',
  templateUrl: './detalles-tipo-situacion.component.html',
  styleUrls: ['./detalles-tipo-situacion.component.scss']
})
export class DetallesTipoSituacionComponent implements OnInit {
  public tipo_situacion: ITipoSituacion;
  public idSituacion: number;

  constructor(private route: ActivatedRoute, private titleService: Title, private cargaSituacion: CargaTipoSituacionService, private router: Router) { }

  ngOnInit(): void {
    this.idSituacion = this.route.snapshot.params['id'];
    console.log(this.idSituacion);
    this.tipo_situacion = this.route.snapshot.data['tipo_situacion'];
    this.titleService.setTitle('Modificar tipo situación ' + this.idSituacion);
  }

  modificarTipoSituacion(): void {
    this.cargaSituacion.modificarTipoSituacion(this.tipo_situacion).subscribe(
      e => {
        console.log('Situación ' + e.id + ' modificada');
        console.log(this.tipo_situacion);
        this.router.navigate(['/situaciones']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
