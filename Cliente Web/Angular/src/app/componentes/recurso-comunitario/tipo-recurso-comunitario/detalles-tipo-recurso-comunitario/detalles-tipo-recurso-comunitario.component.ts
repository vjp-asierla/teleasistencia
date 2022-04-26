import {Component, OnInit} from '@angular/core';
import {ITipoRecursoComunitario} from '../../../../interfaces/i-tipo-recurso-comunitario';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {CargaTipoRecursoComunitarioService} from '../../../../servicios/recurso-comunitario/tipo-recurso-comunitario/carga-tipo-recurso-comunitario.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-detalles-tipo-recurso-comunitario',
  templateUrl: './detalles-tipo-recurso-comunitario.component.html',
  styleUrls: ['./detalles-tipo-recurso-comunitario.component.scss']
})

export class DetallesTipoRecursoComunitarioComponent implements OnInit {
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
        console.log('Tipo recurso comunitario ' + e.id + ' modificado');
        console.log(this.tipo_recurso_comunitario);
        this.router.navigate(['/tipos_recursos_comunitarios']);
      },
      error => {
        console.log(error);
      }
    );
  }
  ejecutarAlerta() :void{
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'Tipo de Recurso Comunitario Modificado Correctamente'
    })

  }
}
