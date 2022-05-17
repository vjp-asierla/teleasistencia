import {Component, OnInit} from '@angular/core';
import {ITipoAlarma} from "../../../interfaces/i-tipo-alarma";
import {IClasificacionAlarma} from "../../../interfaces/i-clasificacion-alarma";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {CargaTipoAlarmaService} from "../../../servicios/carga-tipo-alarma.service";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";


@Component({
  selector: 'app-modificar-tipo-alarma',
  templateUrl: './modificar-tipo-alarma.component.html',
  styleUrls: ['./modificar-tipo-alarma.component.scss']
})

export class ModificarTipoAlarmaComponent implements OnInit {
  public tipo_alarma: any;
  public idTipoAlarma: number;
  public clasificaciones_alarmas: any;

  constructor(private titleService: Title, private route: ActivatedRoute, private cargaTiposAlarmas: CargaTipoAlarmaService, private router: Router) {}

  ngOnInit(): void {
    this.tipo_alarma = this.route.snapshot.data['tipo_alarma'];
    this.idTipoAlarma = this.route.snapshot.params['id'];
    this.clasificaciones_alarmas = this.route.snapshot.data['clasificaciones_alarmas'];
    this.titleService.setTitle('Modificar tipo alarma ' + this.idTipoAlarma);
    this.tipo_alarma.id_clasificacion_alarma = this.tipo_alarma.id_clasificacion_alarma.id;
  }

  optionSelected(i: number): void {
    document.getElementsByClassName('clasificacion_alarma_option')[i].setAttribute('selected', '');
  }

  modificarTipoAlarma(): void {
    this.cargaTiposAlarmas.modificarTipoAlarma(this.tipo_alarma).subscribe(
      e => {
        this.alertExito()
        this.router.navigate(['/tipos_alarmas']);
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
