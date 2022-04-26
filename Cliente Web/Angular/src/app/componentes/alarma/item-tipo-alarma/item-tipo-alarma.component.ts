import {Component, Input, OnInit} from '@angular/core';
import {ITipoAlarma} from '../../../interfaces/i-tipo-alarma';
import Swal from 'sweetalert2';
import {CargaDireccionService} from "../../../servicios/direccion/carga-direccion.service";
import {Router} from "@angular/router";
import {CargaTipoAlarmaService} from "../../../servicios/alarma/tipo-alarma/carga-tipo-alarma.service";

@Component({
  selector: 'app-item-tipo-alarma, [app-item-tipo-alarma]',
  templateUrl: './item-tipo-alarma.component.html',
  styleUrls: ['./item-tipo-alarma.component.scss']
})

export class ItemTipoAlarmaComponent implements OnInit {
  @Input() public tipo_alarma: ITipoAlarma;

  constructor(private cargaTipoAlarma: CargaTipoAlarmaService,private router: Router) {
  }

  ngOnInit(): void {
  }
  modalConfirmacion(): void {
    Swal.fire({
      title: '¿Está seguro que desea eliminar este tipo de alarma?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.eliminarTipoAlarma()
      }
    })
  }
  eliminarTipoAlarma() : void{
    this.cargaTipoAlarma.eliminarTipoAlarma(this.tipo_alarma).subscribe(
      e=>{
        console.log(this.tipo_alarma);
        console.log('Tipo Alarma ' + this.tipo_alarma.id + ' eliminada');
      },
      error => {
        console.log(error);
      }
    )
  }
}
