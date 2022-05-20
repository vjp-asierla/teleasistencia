import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {CargaTipoSituacionService} from "../../../servicios/carga-tipo-situacion.service";
import {ITipoSituacion} from "../../../interfaces/i-tipo-situacion";
import {TipoSituacion} from "../../../clases/tipo-situacion";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-crear-tipo-situacion',
  templateUrl: './crear-tipo-situacion.component.html',
  styleUrls: ['./crear-tipo-situacion.component.scss']
})
export class CrearTipoSituacionComponent implements OnInit {
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
        this.alertExito()
        this.router.navigate(['/situaciones']);
      },
      error => {
        this.alertError()
      }
    );
  }
  //Toast para el Alert indicando que la operación fue exitosa
  alertExito() :void {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      //El tiempo que permanece la alerta, se obtiene mediante una variable global en environment.ts
      timer: environment.timerToast,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: environment.fraseCrear,
    })
  }
  //Toast para el alert indicando que hubo algún error en la operación
  alertError() :void {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: environment.timerToast,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'error',
      title: environment.fraseErrorCrear
    })
  }

}
