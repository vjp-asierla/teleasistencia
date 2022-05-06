import {Component, Input, OnInit} from '@angular/core';
import {ICentroSanitario} from '../../../interfaces/i-centro-sanitario';
import Swal from "sweetalert2";
import {CargaTipoAlarmaService} from "../../../servicios/carga-tipo-alarma.service";
import {CargaCentroSanitarioService} from "../../../servicios/carga-centro-sanitario.service";

@Component({
  selector: 'app-item-centro-sanitario, [app-item-centro-sanitario]',
  templateUrl: './item-centro-sanitario.component.html',
  styleUrls: ['./item-centro-sanitario.component.scss']
})

export class ItemCentroSanitarioComponent implements OnInit {
  @Input() public centro_sanitario: ICentroSanitario;

  constructor(private cargaCentroSanitario: CargaCentroSanitarioService) {
  }

  ngOnInit(): void {
  }

  modalConfirmacion(): void {
    Swal.fire({
      title: '¿Está seguro que desea eliminar este centro sanitario?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.eliminarCentroSanitario()
      }
    })
  }
  eliminarCentroSanitario() : void{
    this.cargaCentroSanitario.eliminarCentroSanitario(this.centro_sanitario).subscribe(
      e=>{
        console.log(this.centro_sanitario);
        console.log('Centro Sanitario ' + this.centro_sanitario.id + ' eliminado');
      },
      error => {
        console.log(error);
      }
    )
  }
}
