import { Component, OnInit } from '@angular/core';
import {ITipoSituacion} from "../../../interfaces/i-tipo-situacion";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {CargaTipoSituacionService} from "../../../servicios/carga-tipo-situacion.service";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";
@Component({
  selector: 'app-modificar-tipo-situacion',
  templateUrl: './modificar-tipo-situacion.component.html',
  styleUrls: ['./modificar-tipo-situacion.component.scss']
})
export class ModificarTipoSituacionComponent implements OnInit {
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
