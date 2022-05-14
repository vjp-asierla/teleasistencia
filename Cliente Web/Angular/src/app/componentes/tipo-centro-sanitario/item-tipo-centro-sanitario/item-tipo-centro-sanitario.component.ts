import {Component, Input, OnInit} from '@angular/core';
import {ITipoCentroSanitario} from '../../../interfaces/i-tipo-centro-sanitario';
import Swal from "sweetalert2";
import {CargaCentroSanitarioService} from "../../../servicios/carga-centro-sanitario.service";
import {CargaTipoCentroSanitarioService} from "../../../servicios/carga-tipo-centro-sanitario.service";


@Component({
  selector: 'app-item-tipo-centro-sanitario, [app-item-tipo-centro-sanitario]',
  templateUrl: './item-tipo-centro-sanitario.component.html',
  styleUrls: ['./item-tipo-centro-sanitario.component.scss']
})

export class ItemTipoCentroSanitarioComponent implements OnInit {
  @Input() public tipo_centro_sanitario: ITipoCentroSanitario;

  constructor(private cargaTipoCentroSanitario: CargaTipoCentroSanitarioService) {
  }

  ngOnInit(): void {
  }
  modalConfirmacion(): void {
    Swal.fire({
      title: '¿Está seguro que desea eliminar este tipo de centro sanitario?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.eliminarTipoCentroSanitario()
      }
    })
  }
  eliminarTipoCentroSanitario() : void{
    this.cargaTipoCentroSanitario.eliminarTipoCentroSanitario(this.tipo_centro_sanitario).subscribe(
      e=>{
        console.log(this.tipo_centro_sanitario);
        console.log('Tipo Centro Sanitario ' + this.tipo_centro_sanitario.id + ' eliminada');
      },
      error => {
        console.log(error);
      }
    )
  }
}
