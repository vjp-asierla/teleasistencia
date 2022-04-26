import {Component, Input, OnInit} from '@angular/core';
import {IPersona} from '../../../interfaces/i-persona';
import Swal from "sweetalert2";
import {CargaPersonaService} from "../../../servicios/persona/carga-persona.service";

@Component({
  selector: 'app-item-persona, [app-item-persona]',
  templateUrl: './item-persona.component.html',
  styleUrls: ['./item-persona.component.scss']
})

export class ItemPersonaComponent implements OnInit {
  @Input() public persona: IPersona;

  constructor(private cargaPersona: CargaPersonaService) {
  }

  ngOnInit(): void {
  }
  modalConfirmacion(): void {
    Swal.fire({
      title: '¿Está seguro que desea eliminar esta persona?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.eliminarPersona()
      }
    })
  }
  eliminarPersona() : void{
    this.cargaPersona.eliminarPersona(this.persona).subscribe(
      e=>{
        console.log(this.persona);
        console.log('Persona ' + this.persona.id + ' eliminada');
      },
      error => {
        console.log(error);
      }
    )
  }
}
