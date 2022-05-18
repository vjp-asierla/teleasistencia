import { Component, OnInit } from '@angular/core';
import {ITipoVivienda} from "../../../interfaces/i-tipo-vivienda";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {CargaViviendaService} from "../../../servicios/carga-vivienda.service";
import {TipoVivienda} from "../../../clases/tipo-vivienda";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-crear-tipo-vivienda',
  templateUrl: './crear-vivienda.component.html',
  styleUrls: ['./crear-vivienda.component.scss']
})
export class CrearViviendaComponent implements OnInit {
  public vivienda: ITipoVivienda;
  public nombreVivienda: string;

  constructor(private titleService: Title, private route: ActivatedRoute, private router: Router, private cargaVivienda: CargaViviendaService ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Crear nueva vivienda');
    this.vivienda = new TipoVivienda();
    this.nombreVivienda = '';
  }

  nuevaVivienda(): void{
    this.cargaVivienda.nuevaVivienda(this.vivienda).subscribe(
      e => {
        this.alertExito()
        this.router.navigate(['/viviendas']);
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
