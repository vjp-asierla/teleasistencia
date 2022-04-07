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
  public tipos_situaciones: ITipoSituacion;
  public idSituacion: number;

  constructor(private route: ActivatedRoute, private titleService: Title, private cargaSituacion: CargaTipoSituacionService, private router: Router) { }

  ngOnInit(): void {
    this.idSituacion = this.route.snapshot.params['id'];
    console.log(this.idSituacion); //OK
    this.tipos_situaciones = this.route.snapshot.data['tipos_situaciones'];
    console.log(this.tipos_situaciones.id); // NO OK - PARECE VACIO...
    this.titleService.setTitle('Modificar tipo situación ' + this.idSituacion);
  }

  modificarTipoSituacion(): void {
    this.cargaSituacion.modificarTipoSituacion(this.tipos_situaciones).subscribe(
      e => {
        console.log('Situación ' + e.id + ' modificada');
        console.log(this.tipos_situaciones);
        this.router.navigate(['/situaciones']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
