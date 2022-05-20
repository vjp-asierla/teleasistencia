import {Component, OnInit} from '@angular/core';
import {ICentroSanitario} from '../../../interfaces/i-centro-sanitario';
import {ITipoCentroSanitario} from '../../../interfaces/i-tipo-centro-sanitario';
import {IDireccion} from '../../../interfaces/i-direccion';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {CargaCentroSanitarioService} from '../../../servicios/carga-centro-sanitario.service';
import {CentroSanitario} from '../../../clases/centro-sanitario';
import {Direccion} from '../../../clases/direccion';
import {CargaDireccionService} from '../../../servicios/carga-direccion.service';
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";
@Component({
  selector: 'app-crear-centro-sanitario',
  templateUrl: './crear-centro-sanitario.component.html',
  styleUrls: ['./crear-centro-sanitario.component.scss']
})

export class CrearCentroSanitarioComponent implements OnInit {
  public centro_sanitario: ICentroSanitario;
  public tipos_centros_sanitarios: ITipoCentroSanitario[];
  public dire: IDireccion;


  constructor(private titleService: Title, private route: ActivatedRoute, private cargaDirecciones: CargaDireccionService, private cargaCentrosSanitarios: CargaCentroSanitarioService, private router: Router) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Nuevo centro sanitario');
    this.centro_sanitario = new CentroSanitario();
    this.tipos_centros_sanitarios = this.route.snapshot.data['tipos_centros_sanitarios'];
    this.dire = new Direccion();
  }

  nuevaDireccion(): void {
    this.cargaDirecciones.nuevaDireccion(this.dire).subscribe(
      e => {
        this.router.navigate(['/centros_sanitarios']);
      },
      error => {
        console.log(error);
      }
    );
  }

  nuevoCentroSanitario(): void {
    this.centro_sanitario.id_direccion = this.dire;
    this.cargaCentrosSanitarios.nuevoCentroSanitario(this.centro_sanitario).subscribe(
      e => {
        this.nuevaDireccion();
        this.alertExito()
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
