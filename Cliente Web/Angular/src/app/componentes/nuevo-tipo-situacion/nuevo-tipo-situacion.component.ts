import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {CargaTipoSituacionService} from "../../servicios/carga-tipo-situacion.service";
import {ITipoSituacion} from "../../interfaces/i-tipo-situacion";
import {TipoSituacion} from "../../clases/tipo-situacion";

@Component({
  selector: 'app-nuevo-tipo-situacion',
  templateUrl: './nuevo-tipo-situacion.component.html',
  styleUrls: ['./nuevo-tipo-situacion.component.scss']
})
export class NuevoTipoSituacionComponent implements OnInit {
  public situacion: ITipoSituacion;
  public nombreSituacion: string;

  constructor(private titleService: Title, private route: ActivatedRoute, private router: Router, private cargaSituacion: CargaTipoSituacionService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Crear nueva situación');
    this.situacion = new TipoSituacion();
    this.nombreSituacion = '';
  }

  nuevaSituacion(): void{
    this.cargaSituacion.nuevoTipoSituacion(this.situacion).subscribe(
      e => {
        console.log('Situación creada');
        console.log(this.situacion);
        this.router.navigate(['/situaciones']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
