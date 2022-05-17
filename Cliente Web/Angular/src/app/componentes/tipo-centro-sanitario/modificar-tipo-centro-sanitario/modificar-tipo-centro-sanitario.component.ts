import {Component, OnInit} from '@angular/core';
import {ITipoCentroSanitario} from '../../../interfaces/i-tipo-centro-sanitario';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {CargaTipoCentroSanitarioService} from '../../../servicios/carga-tipo-centro-sanitario.service';
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";


@Component({
  selector: 'app-modificar-tipo-centro-sanitario',
  templateUrl: './modificar-tipo-centro-sanitario.component.html',
  styleUrls: ['./modificar-tipo-centro-sanitario.component.scss']
})

export class ModificarTipoCentroSanitarioComponent implements OnInit {
  public tipo_centro_sanitario: ITipoCentroSanitario;
  public idTipoCentroSanitario: number;

  constructor(private route: ActivatedRoute, private titleService: Title, private cargaTiposCentrosSanitarios: CargaTipoCentroSanitarioService, private router: Router) {
  }

  ngOnInit(): void {
    this.tipo_centro_sanitario = this.route.snapshot.data['tipo_centro_sanitario'];
    this.idTipoCentroSanitario = this.route.snapshot.params['id'];
    this.titleService.setTitle('Modificar tipo centro sanitario ' + this.idTipoCentroSanitario);
  }

  modificarTipoCentroSanitario(): void {
    this.cargaTiposCentrosSanitarios.modificarTipoCentroSanitario(this.tipo_centro_sanitario).subscribe(
      e => {
        this.alertExito()
        this.router.navigate(['/tipos_centros_sanitarios']);
      },
      error => {
        this.alertExito()
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
