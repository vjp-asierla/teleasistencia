import {Component, Input, OnInit} from '@angular/core';
import {ITipoModalidadPaciente} from '../../../interfaces/i-tipo-modalidad-paciente';

@Component({
  selector: 'app-item-tipo-modalidad-paciente, [app-item-tipo-modalidad-paciente]',
  templateUrl: './item-tipo-modalidad-paciente.component.html',
  styleUrls: ['./item-tipo-modalidad-paciente.component.scss']
})

export class ItemTipoModalidadPacienteComponent implements OnInit {
  @Input() public tipo_modalidad_paciente: ITipoModalidadPaciente;

  constructor() {
  }

  ngOnInit(): void {
  }
}
