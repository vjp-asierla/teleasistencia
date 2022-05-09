import {Component, Input, OnInit} from '@angular/core';
import {IRecursoComunitario} from '../../../interfaces/i-recurso-comunitario';

import Swal from "sweetalert2";
import {CargaTipoRecursoComunitarioService} from "../../../servicios/carga-tipo-recurso-comunitario.service";
import {CargaRecursoComunitarioService} from "../../../servicios/carga-recurso-comunitario.service";


@Component({
  selector: 'app-item-resurso-comunitario, [app-item-resurso-comunitario]',
  templateUrl: './item-resurso-comunitario.component.html',
  styleUrls: ['./item-resurso-comunitario.component.scss']
})

export class ItemResursoComunitarioComponent implements OnInit {
  @Input() public recurso_comunitario: IRecursoComunitario;

  constructor(private cargaRecursoComunitario: CargaRecursoComunitarioService) {
  }

  ngOnInit(): void {
  }
  modalConfirmacion(): void {
    Swal.fire({
      title: '¿Está seguro que desea eliminar este recurso comunitario?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.eliminarRecursoComunitario()
      }
    })
  }
  eliminarRecursoComunitario() : void{
    this.cargaRecursoComunitario.eliminarRecursoComunitario(this.recurso_comunitario).subscribe(
      e=>{
        console.log(this.recurso_comunitario);
        console.log('Recurso Comunitario ' + this.recurso_comunitario.id + ' eliminado');
      },
      error => {
        console.log(error);
      }
    )
  }
}
