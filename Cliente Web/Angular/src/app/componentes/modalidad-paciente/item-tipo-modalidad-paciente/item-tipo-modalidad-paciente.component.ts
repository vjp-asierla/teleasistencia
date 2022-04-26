import {Component, Input, OnInit} from '@angular/core';
import {ITipoModalidadPaciente} from '../../../interfaces/i-tipo-modalidad-paciente';
import Swal from "sweetalert2";
import {CargaTipoCentroSanitarioService} from "../../../servicios/centro-sanitario/tipo-centro-sanitario/carga-tipo-centro-sanitario.service";
import {CargaTipoModalidadPacienteService} from "../../../servicios/modalidad-paciente/carga-tipo-modalidad-paciente.service";

@Component({
  selector: 'app-item-tipo-modalidad-paciente, [app-item-tipo-modalidad-paciente]',
  templateUrl: './item-tipo-modalidad-paciente.component.html',
  styleUrls: ['./item-tipo-modalidad-paciente.component.scss']
})

export class ItemTipoModalidadPacienteComponent implements OnInit {
  @Input() public tipo_modalidad_paciente: ITipoModalidadPaciente;

  constructor(private cargaModalidadPaciente: CargaTipoModalidadPacienteService) {
  }

  ngOnInit(): void {
  }
  modalConfirmacion(): void {
    Swal.fire({
      title: '¿Está seguro que desea eliminar este tipo de modalidad de paciente?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.eliminarTipoModalidadPaciente()
      }
    })
  }
  eliminarTipoModalidadPaciente() : void{
    this.cargaModalidadPaciente.eliminarTipoModalidadPaciente(this.tipo_modalidad_paciente).subscribe(
      e=>{
        console.log(this.tipo_modalidad_paciente);
        console.log('Tipo Modalidad Paciente ' + this.tipo_modalidad_paciente.id + ' eliminada');
      },
      error => {
        console.log(error);
      }
    )
  }
}
