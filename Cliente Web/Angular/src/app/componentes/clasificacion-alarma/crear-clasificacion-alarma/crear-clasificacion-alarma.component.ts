import {Component, OnInit} from '@angular/core';
import {IClasificacionAlarma} from '../../../interfaces/i-clasificacion-alarma';
import {Title} from '@angular/platform-browser';
import {ClasificacionAlarma} from '../../../clases/clasificacion-alarma';
import {ActivatedRoute, Router} from '@angular/router';
import {CargaClasificacionAlarmaService} from '../../../servicios/carga-clasificacion-alarma.service';
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";


@Component({
  selector: 'app-crear-clasificacion-alarma',
  templateUrl: './crear-clasificacion-alarma.component.html',
  styleUrls: ['./crear-clasificacion-alarma.component.scss']
})

export class CrearClasificacionAlarmaComponent implements OnInit {
  public clasificacion_alarma: IClasificacionAlarma;

  constructor(private titleService: Title, private route: ActivatedRoute, private cargaClasificacionesAlarmas: CargaClasificacionAlarmaService, private router: Router) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Nueva clasificación alarma');
    this.clasificacion_alarma = new ClasificacionAlarma();
  }

  nuevaClasificacionAlarma(): void {
    this.cargaClasificacionesAlarmas.nuevaClasificacionAlarma(this.clasificacion_alarma).subscribe(
      e => {
        this.alertExito()
        this.router.navigate(['/clasificaciones_alarmas']);
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
