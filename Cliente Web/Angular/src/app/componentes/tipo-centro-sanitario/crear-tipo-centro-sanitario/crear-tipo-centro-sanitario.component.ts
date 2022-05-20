import {Component, OnInit} from '@angular/core';
import {ITipoCentroSanitario} from '../../../interfaces/i-tipo-centro-sanitario';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {CargaTipoCentroSanitarioService} from '../../../servicios/carga-tipo-centro-sanitario.service';
import {TipoCentroSanitario} from '../../../clases/tipo-centro-sanitario';
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";


@Component({
  selector: 'app-crear-tipo-centro-sanitario',
  templateUrl: './crear-tipo-centro-sanitario.component.html',
  styleUrls: ['./crear-tipo-centro-sanitario.component.scss']
})

export class CrearTipoCentroSanitarioComponent implements OnInit {
  public tipo_centro_sanitario: ITipoCentroSanitario;

  constructor(private titleService: Title, private route: ActivatedRoute, private cargaTiposCentrosSanitarios: CargaTipoCentroSanitarioService, private router: Router) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Nuevo tipo centro sanitario');
    this.tipo_centro_sanitario = new TipoCentroSanitario();
  }

  nuevoTipoCentroSanitario(): void {
    this.cargaTiposCentrosSanitarios.nuevoTipoCentroSanitario(this.tipo_centro_sanitario).subscribe(
      e => {
        this.alertExito()
        this.router.navigate(['/tipos_centros_sanitarios']);
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
