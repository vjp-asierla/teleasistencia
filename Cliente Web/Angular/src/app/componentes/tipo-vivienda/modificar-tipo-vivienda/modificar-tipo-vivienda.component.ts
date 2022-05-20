import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {CargaViviendaService} from "../../../servicios/carga-vivienda.service";
import {ITipoVivienda} from "../../../interfaces/i-tipo-vivienda";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-modificar-tipo-vivienda',
  templateUrl: './modificar-tipo-vivienda.component.html',
  styleUrls: ['./modificar-tipo-vivienda.component.scss']
})
export class ModificarTipoViviendaComponent implements OnInit {
  public tipo_vivienda: ITipoVivienda;
  public idTipoVivienda: number;

  constructor(private route: ActivatedRoute, private titleService: Title, private cargaViviendas: CargaViviendaService, private router: Router) {
  }
  ngOnInit(): void {
    this.idTipoVivienda = this.route.snapshot.params['id'];
    this.tipo_vivienda = this.route.snapshot.data['tipo_vivienda'];
    this.titleService.setTitle('Modificar tipo vivienda ' + this.tipo_vivienda);
  }

  modificarTipoVivienda(): void {
    this.cargaViviendas.modificarTipoVivienda(this.tipo_vivienda).subscribe(
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
