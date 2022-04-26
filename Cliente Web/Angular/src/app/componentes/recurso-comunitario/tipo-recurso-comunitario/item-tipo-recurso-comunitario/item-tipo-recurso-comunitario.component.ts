import {Component, Input, OnInit} from '@angular/core';
import {ITipoRecursoComunitario} from '../../../../interfaces/i-tipo-recurso-comunitario';
import Swal from "sweetalert2";
import {CargaTipoRecursoComunitarioService} from "../../../../servicios/recurso-comunitario/tipo-recurso-comunitario/carga-tipo-recurso-comunitario.service";

@Component({
  selector: 'app-item-tipo-recurso-comunitario, [app-item-tipo-recurso-comunitario]',
  templateUrl: './item-tipo-recurso-comunitario.component.html',
  styleUrls: ['./item-tipo-recurso-comunitario.component.scss']
})

export class ItemTipoRecursoComunitarioComponent implements OnInit {
  @Input() public tipo_recurso_comunitario: ITipoRecursoComunitario;

  constructor(private cargaTipoRecursoComunitario: CargaTipoRecursoComunitarioService) {
  }

  ngOnInit(): void {
  }
  modalConfirmacion(): void {
    Swal.fire({
      title: '¿Está seguro que desea eliminar este tipo de recurso comunitario?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.eliminarTipoRecursoComunitario()
      }
    })
  }
  eliminarTipoRecursoComunitario() : void{
    this.cargaTipoRecursoComunitario.eliminarTipoRecursoComunitario(this.tipo_recurso_comunitario).subscribe(
      e=>{
        console.log(this.tipo_recurso_comunitario);
        console.log('Tipo Recurso Comunitario ' + this.tipo_recurso_comunitario.id + ' eliminado');
      },
      error => {
        console.log(error);
      }
    )
  }
}
