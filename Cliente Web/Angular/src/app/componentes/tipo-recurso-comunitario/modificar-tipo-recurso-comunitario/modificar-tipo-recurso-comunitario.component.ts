import {Component, OnInit} from '@angular/core';
import {ITipoRecursoComunitario} from '../../../interfaces/i-tipo-recurso-comunitario';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {CargaTipoRecursoComunitarioService} from '../../../servicios/carga-tipo-recurso-comunitario.service';
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";


@Component({
  selector: 'app-modificar-tipo-recurso-comunitario',
  templateUrl: './modificar-tipo-recurso-comunitario.component.html',
  styleUrls: ['./modificar-tipo-recurso-comunitario.component.scss']
})

export class ModificarTipoRecursoComunitarioComponent implements OnInit {
  public tipo_recurso_comunitario: ITipoRecursoComunitario;
  public idTipoRecursoComunitario: number;

  constructor(private route: ActivatedRoute, private titleService: Title, private cargaTiposRecursosComunitarios: CargaTipoRecursoComunitarioService, private router: Router) {
  }

  ngOnInit(): void {
    this.tipo_recurso_comunitario = this.route.snapshot.data['tipo_recurso_comunitario'];
    this.idTipoRecursoComunitario = this.route.snapshot.params['id'];
    this.titleService.setTitle('Modificar tipo recurso comunitario ' + this.idTipoRecursoComunitario);
  }

  modificarTipoRecursoComunitario(): void {
    this.cargaTiposRecursosComunitarios.modificarTipoRecursoComunitario(this.tipo_recurso_comunitario).subscribe(
      e => {
        this.alertExito()
        this.router.navigate(['/tipos_recursos_comunitarios']);
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
