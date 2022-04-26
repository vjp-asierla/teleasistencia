import {Component, OnInit} from '@angular/core';
import {IDireccion} from '../../../interfaces/i-direccion';
import {IRecursoComunitario} from '../../../interfaces/i-recurso-comunitario';
import {ITipoRecursoComunitario} from '../../../interfaces/i-tipo-recurso-comunitario';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {CargaDireccionService} from '../../../servicios/direccion/carga-direccion.service';
import {CargaRecursoComunitarioService} from '../../../servicios/recurso-comunitario/carga-recurso-comunitario.service';
import {Direccion} from '../../../clases/direccion';
import {RecursoComunitario} from '../../../clases/recurso-comunitario';
import Swal from "sweetalert2";

@Component({
  selector: 'app-nuevo-recurso-comunitario',
  templateUrl: './nuevo-recurso-comunitario.component.html',
  styleUrls: ['./nuevo-recurso-comunitario.component.scss']
})

export class NuevoRecursoComunitarioComponent implements OnInit {
  public recurso_comunitario: IRecursoComunitario;
  public tipos_recursos_comunitarios: ITipoRecursoComunitario[];
  public dire: IDireccion;

  constructor(private titleService: Title, private route: ActivatedRoute, private cargaDirecciones: CargaDireccionService, private cargaRecursosComunitarios: CargaRecursoComunitarioService, private router: Router) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Nuevo recurso comunitario');
    this.recurso_comunitario = new RecursoComunitario();
    this.tipos_recursos_comunitarios = this.route.snapshot.data['tipos_recursos_comunitarios'];
    this.dire = new Direccion();
  }

  nuevaDireccion(): void {
    this.cargaDirecciones.nuevaDireccion(this.dire).subscribe(
      e => {
        this.router.navigate(['/recursos_comunitarios']);
      },
      error => {
        console.log(error);
      }
    );
  }

  nuevoRecursoComunitario(): void {
    this.recurso_comunitario.id_direccion = this.dire;
    this.cargaRecursosComunitarios.nuevoRecursoComunitario(this.recurso_comunitario).subscribe(
      e => {
        this.nuevaDireccion();
        console.log('Recurso comunitario creado');
        console.log(this.recurso_comunitario);
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
      title: 'Nuevo Recurso Comunitario Creado Correctamente'
    })

  }
}
