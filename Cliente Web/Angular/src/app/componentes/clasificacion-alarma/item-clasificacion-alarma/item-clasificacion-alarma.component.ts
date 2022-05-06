import {Component, Input, OnInit} from '@angular/core';
import {IClasificacionAlarma} from '../../../interfaces/i-clasificacion-alarma';
import Swal from 'sweetalert2';
import {CargaTipoAlarmaService} from "../../../servicios/carga-tipo-alarma.service";
import {CargaClasificacionAlarmaService} from "../../../servicios/carga-clasificacion-alarma.service";

@Component({
  selector: 'app-item-clasificacion-alarma , [app-item-clasificacion-alarma]',
  templateUrl: './item-clasificacion-alarma.component.html',
  styleUrls: ['./item-clasificacion-alarma.component.scss']
})

export class ItemClasificacionAlarmaComponent implements OnInit {
  @Input() public clasificacion_alarma: IClasificacionAlarma;

  constructor(private cargaClasificacionAlarma: CargaClasificacionAlarmaService) {
  }

  ngOnInit(): void {
  }
  modalConfirmacion(): void {
    Swal.fire({
      title: '¿Está seguro que desea eliminar esta clasificación de alarma?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.eliminarClasificacionAlarma()
      }
    })
  }
  eliminarClasificacionAlarma() : void{
    this.cargaClasificacionAlarma.eliminarClasificacionAlarma(this.clasificacion_alarma).subscribe(
      e=>{
        console.log(this.clasificacion_alarma);
        console.log('Clasificacion de Alarma ' + this.clasificacion_alarma.id + ' eliminada');
      },
      error => {
        console.log(error);
      }
    )
  }
}
