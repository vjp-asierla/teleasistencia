import {Component, OnInit} from '@angular/core';
import {IClasificacionAlarma} from '../../../interfaces/i-clasificacion-alarma';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {CargaClasificacionAlarmaService} from '../../../servicios/carga-clasificacion-alarma.service';
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";
@Component({
  selector: 'app-modificar-clasificacion-alarma',
  templateUrl: './modificar-clasificacion-alarma.component.html',
  styleUrls: ['./modificar-clasificacion-alarma.component.scss']
})

export class ModificarClasificacionAlarmaComponent implements OnInit {
  public clasificacion_alarma: IClasificacionAlarma;
  public idClasificacionAlarma: number;

  constructor(private route: ActivatedRoute, private titleService: Title, private cargaClasificacionesAlarmas: CargaClasificacionAlarmaService, private router: Router) {
  }

  ngOnInit(): void {
    this.clasificacion_alarma = this.route.snapshot.data['clasificacion_alarma'];
    this.idClasificacionAlarma = this.route.snapshot.params['id'];
    this.titleService.setTitle('Modificar clasificación alarma ' + this.idClasificacionAlarma);
  }

  modificarClasificacionAlarma(): void {
    this.cargaClasificacionesAlarmas.modificarClasificacionAlarma(this.clasificacion_alarma).subscribe(
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
      title: environment.fraseModificar,
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
      title: environment.fraseErrorModificar
    })
  }

}
