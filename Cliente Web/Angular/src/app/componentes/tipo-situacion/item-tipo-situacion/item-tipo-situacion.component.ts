import {Component, Input, OnInit} from '@angular/core';
import {ITipoSituacion} from "../../../interfaces/i-tipo-situacion";

@Component({
  selector: 'app-item-tipo-situacion, [app-item-tipo-situacion]',
  templateUrl: './item-tipo-situacion.component.html',
  styleUrls: ['./item-tipo-situacion.component.scss']
})
export class ItemTipoSituacionComponent implements OnInit {
  @Input() public tipo_situacion: ITipoSituacion;

  constructor() { }

  ngOnInit(): void {
  }

}
